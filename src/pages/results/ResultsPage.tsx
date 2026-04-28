import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { StepIndicator } from "@/shared/ui/StepIndicator"
import { FeedbackSummary } from "@/features/feedback/ui/FeedbackSummary"
import { FeedbackList } from "@/features/feedback/ui/FeedbackList"
import { type Question } from "@/shared/model/mockData"
import { type FeedbackResponse } from "@/shared/model/api.type"
import { generateFeedback } from "@/shared/api/interview.api"

interface ResultsState {
    setupData: unknown
    questions: Question[]
    answers: Record<string, string>
}

const ResultsLoadingView: React.FC = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mb-6"
        >
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        </motion.div>
        <h2 className="text-xl font-bold text-blue-900 mb-2">AI가 답변을 꼼꼼히 분석하고 있습니다</h2>
        <p className="text-blue-700/60 text-sm">잠시만 기다려주세요. 강점과 개선점을 찾고 있습니다...</p>
    </div>
)

export const ResultsPage: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [feedbackData, setFeedbackData] = useState<FeedbackResponse | null>(null)
    const [error, setError] = useState<string | null>(null)

    const state = location.state as ResultsState | null

    useEffect(() => {
        if (!state) {
            navigate("/")
            return
        }

        const fetchFeedback = async () => {
            try {
                const qaList = state.questions.map((q) => ({
                    question: q.text,
                    answer: state.answers[q.id] ?? "",
                }))
                const result = await generateFeedback({ qaList })
                setFeedbackData(result)
            } catch {
                setError("피드백 생성에 실패했습니다. 다시 시도해주세요.")
            } finally {
                setLoading(false)
            }
        }

        fetchFeedback()
    }, [])

    if (loading) return <ResultsLoadingView />
    if (error) return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <p className="text-red-500 mb-4">{error}</p>
            <button
                onClick={() => navigate(-1)}
                className="px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors"
            >
                다시 시도하기
            </button>
        </div>
    )
    if (!state || !feedbackData) return null

    return (
        <div className="min-h-screen py-12 px-4">
            <StepIndicator currentStep={4} />

            <div className="max-w-4xl mx-auto">
                <FeedbackSummary overallEvaluation={feedbackData.overallEvaluation} />

                <FeedbackList questionFeedbacks={feedbackData.questionFeedbacks} />

                <div className="mt-12 text-center">
                    <button
                        onClick={() => navigate("/")}
                        className="px-8 py-4 bg-white border-2 border-blue-300 hover:bg-blue-50 text-blue-400 rounded-xl font-bold shadow-sm transition-colors"
                    >
                        처음으로 돌아가기
                    </button>
                </div>
            </div>
        </div>
    )
}
