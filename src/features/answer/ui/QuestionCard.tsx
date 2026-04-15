import React from "react"
import { motion } from "framer-motion"

interface QuestionCardProps {
    index: number
    question: string
    answer: string
    onChange: (answer: string) => void
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ index, question, answer, onChange }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay: index * 0.1,
                duration: 0.4,
            }}
            className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 mb-6 hover:shadow-md transition-shadow"
        >
            <div className="flex items-center gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-400 flex items-center justify-center font-bold text-sm">
                    Q{index + 1}
                </div>
                <h3 className="text-lg font-medium text-blue-900 leading-relaxed">{question}</h3>
            </div>

            <div className="mt-4 relative">
                <textarea
                    value={answer}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="이곳에 답변을 작성해주세요. 구체적인 경험과 사례를 들어 설명하면 더 좋은 평가를 받을 수 있습니다."
                    className="w-full h-32 p-4 bg-blue-50 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none text-blue-400 placeholder-blue-300/50 transition-all"
                />
                <div className="absolute bottom-3 right-4 text-xs text-blue-300/70">{answer.length} 자</div>
            </div>
        </motion.div>
    )
}
