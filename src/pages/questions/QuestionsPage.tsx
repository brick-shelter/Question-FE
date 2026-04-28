import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { StepIndicator } from "@/shared/ui/StepIndicator"
import { QuestionList } from "@/features/answer/ui/QuestionList"
import { AnswerSubmitBar } from "@/features/answer/ui/AnswerSubmitBar"
import { type Question } from "@/shared/model/mockData"
import { generateCompanyQuestions, generateUniversityQuestions } from "@/shared/api/interview.api"

const COMPANY_TYPE_LABELS: Record<string, string> = {
    STARTUP: "스타트업",
    MID_SIZED_ENTERPRISES: "중견기업",
    LARGE_CORPORATIONS: "대기업",
    PUBLIC_ENTERPRISES: "공기업",
}

interface SetupData {
    keywords: string[]
    interviewType: "company" | "school"
    subType: string
    domain?: string
    count: number
}

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
            {COMPANY_TYPE_LABELS[setupData.subType] ?? setupData.subType} 면접을 위한 질문을 준비중입니다...
        </p>
    </div>
)

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
                    {COMPANY_TYPE_LABELS[setupData.subType] ?? setupData.subType}
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
    const [error, setError] = useState<string | null>(null)

    const setupData = location.state as SetupData | null

    useEffect(() => {
        if (!setupData) {
            navigate("/setup")
            return
        }

        const fetchQuestions = async () => {
            try {
                let questionTexts: string[]

                if (setupData.interviewType === "company") {
                    const res = await generateCompanyQuestions({
                        keywords: setupData.keywords,
                        questionCount: setupData.count,
                        companyType: setupData.subType || undefined,
                        domain: setupData.domain || undefined,
                    })
                    questionTexts = res.questions
                } else {
                    const res = await generateUniversityQuestions({
                        keywords: setupData.keywords,
                        questionCount: setupData.count,
                        major: setupData.subType || undefined,
                    })
                    questionTexts = res.questions
                }

                const generatedQuestions: Question[] = questionTexts.map((text, index) => ({
                    id: `q${index + 1}`,
                    text,
                }))
                setQuestions(generatedQuestions)
                setAnswers(Object.fromEntries(generatedQuestions.map((q) => [q.id, ""])))
            } catch {
                setError("질문 생성에 실패했습니다. 다시 시도해주세요.")
            } finally {
                setLoading(false)
            }
        }

        fetchQuestions()
    }, [])

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
    if (error) return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <p className="text-red-500 mb-4">{error}</p>
            <button
                onClick={() => navigate("/setup")}
                className="px-6 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors"
            >
                다시 시도하기
            </button>
        </div>
    )
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
