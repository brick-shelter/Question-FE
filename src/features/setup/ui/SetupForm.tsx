import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { KeywordInput } from "./KeywordInput"
import { InterviewTypeSelector } from "./InterviewTypeSelector"
import { QuestionCount } from "./QuestionCount"
import { setupSchema } from "../model/setup.schema"

export const SetupForm: React.FC = () => {
    const navigate = useNavigate()

    const [keywords, setKeywords] = useState<string[]>([])
    const [interviewType, setInterviewType] = useState<"company" | "school" | "">("")
    const [subType, setSubType] = useState("")
    const [domain, setDomain] = useState("")
    const [count, setCount] = useState(0)

    const addKeyword = (kw: string) => {
        if (!keywords.includes(kw) && keywords.length < 5) {
            setKeywords([...keywords, kw])
        }
    }

    const removeKeyword = (kw: string) => {
        setKeywords(keywords.filter((k) => k !== kw))
    }

    const handleTypeChange = (type: "company" | "school") => {
        setInterviewType(type)
        setSubType("")
        setDomain("")
    }

    const handleNext = () => {
        const result = setupSchema.safeParse({
            keywords,
            interviewType: interviewType || undefined,
            subType,
            domain: interviewType === "company" ? domain : "",
            count,
        })

        if (!result.success) {
            const firstError = result.error.issues[0]
            alert(firstError.message)
            return
        }

        navigate("/questions", {
            state: result.data,
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-blue-100 p-8"
        >
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">어떤 면접을 준비하시나요?</h2>
                <p className="text-blue-700/60">맞춤형 질문 생성을 위해 아래 정보를 입력해주세요.</p>
            </div>

            <div className="space-y-8">
                <KeywordInput keywords={keywords} onAdd={addKeyword} onRemove={removeKeyword} />

                <QuestionCount count={count} onChangeCount={setCount} />

                <hr className="border-blue-100" />

                <InterviewTypeSelector
                    interviewType={interviewType}
                    subType={subType}
                    domain={domain}
                    onTypeChange={handleTypeChange}
                    onSubTypeChange={setSubType}
                    onDomainChange={setDomain}
                />
            </div>

            <div className="mt-10 flex justify-between">
                <button
                    onClick={() => navigate("/")}
                    className="px-6 py-3 text-blue-700 hover:bg-blue-50 rounded-xl font-medium transition-colors"
                >
                    이전으로
                </button>

                <button
                    onClick={handleNext}
                    className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-bold shadow-sm transition-colors"
                >
                    예상 질문 생성하기
                </button>
            </div>
        </motion.div>
    )
}
