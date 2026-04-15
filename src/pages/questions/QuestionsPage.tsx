import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { StepIndicator } from "@/shared/ui/StepIndicator"
import { QuestionList } from "@/features/answer/ui/QuestionList"
import { AnswerSubmitBar } from "@/features/answer/ui/AnswerSubmitBar"
import { MOCK_QUESTIONS, type Question } from "@/shared/model/mockData"

interface SetupData {
    keywords: string[]
    interviewType: string
    subType: string
    domain: string
}

// 로딩 화면
const QuestionsLoadingView: React.FC<{ setupData: SetupData }> = ({ setupData }) => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-100 border-t-blue-400 rounded-full mb-6"
        />
        <h2 className="text-xl font-bold text-blue-900 mb-2">AI가 맞춤형 질문을 생성하고 있습니다</h2>
        <p className="text-blue-700/60 text-sm">
            {setupData.keywords.join(", ")} 분야 {setupData.domain ? `(${setupData.domain}) ` : ""}
            {setupData.subType} 면접을 위한 질문을 준비중입니다...
        </p>
    </div>
)

// 질문 헤더 배너
const QuestionsBanner: React.FC<{ setupData: SetupData }> = ({ setupData }) => (
    <div className="mb-8 bg-white p-6 rounded-2xl shadow-sm border border-blue-100 flex items-center justify-between">
        <div>
            <h2 className="text-xl font-bold text-blue-900 mb-1">예상 질문이 준비되었습니다!</h2>
            <p className="text-sm text-blue-700/60">실제 면접처럼 생각하고 각 질문에 대한 답변을 작성해보세요.</p>
        </div>
        <div className="hidden sm:block text-right">
            <div className="text-xs text-blue-700/60 mb-1">설정된 면접</div>
            <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 flex-wrap justify-end">
                {setupData.keywords.map((kw) => (
                    <span key={kw} className="text-xs font-bold text-blue-600">
                        {kw}
                    </span>
                ))}
                <span className="text-gray-300">|</span>
                <span className="text-xs font-medium text-blue-700">
                    {setupData.subType}
                    {setupData.domain ? ` · ${setupData.domain}` : ""}
                </span>
            </div>
        </div>
    </div>
)

export const QuestionsPage: React.FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [questions, setQuestions] = useState<Question[]>([])
    const [answers, setAnswers] = useState<Record<string, string>>({})

    const setupData = location.state as SetupData | null

    useEffect(() => {
        if (!setupData) {
            navigate("/setup")
            return
        }

        const timer = setTimeout(() => {
            const matchedKey = setupData.keywords.find((kw) => MOCK_QUESTIONS[kw])
            const categoryQuestions = MOCK_QUESTIONS[matchedKey || ""] || MOCK_QUESTIONS["default"]

            setQuestions(categoryQuestions)
            setAnswers(Object.fromEntries(categoryQuestions.map((q) => [q.id, ""])))
            setLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [setupData, navigate])

    const handleAnswerChange = (id: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [id]: value }))
    }

    const handleSubmit = () => {
        const hasAnswers = Object.values(answers).some((a) => a.trim().length > 0)
        if (!hasAnswers) {
            if (!window.confirm("작성된 답변이 없습니다. 이대로 제출하시겠습니까?")) return
        }
        navigate("/results", { state: { setupData, questions, answers } })
    }

    if (loading && setupData) return <QuestionsLoadingView setupData={setupData} />
    if (!setupData) return null

    const answeredCount = Object.values(answers).filter((a) => a.trim().length > 0).length

    return (
        <div className="min-h-screen py-12 px-4">
            <StepIndicator currentStep={3} />

            <div className="max-w-3xl mx-auto">
                <QuestionsBanner setupData={setupData} />

                <QuestionList questions={questions} answers={answers} onAnswerChange={handleAnswerChange} />

                <AnswerSubmitBar answeredCount={answeredCount} totalCount={questions.length} onSubmit={handleSubmit} />
            </div>
        </div>
    )
}
