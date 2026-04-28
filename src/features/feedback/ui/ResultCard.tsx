import React from "react"
import { motion } from "framer-motion"
import type { QuestionFeedback } from "@/shared/model/api.type"

interface ResultCardProps {
    index: number
    feedback: QuestionFeedback
}

export const ResultCard: React.FC<ResultCardProps> = ({ index, feedback }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden mb-8"
        >
            <div className="bg-blue-50 p-6 border-b border-blue-100">
                <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-300 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        Q{index + 1}
                    </div>
                    <h3 className="text-lg font-medium text-blue-400 pt-1 leading-relaxed">{feedback.question}</h3>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div>
                    <h4 className="text-sm font-bold text-blue-500 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                        나의 답변
                    </h4>
                    <div className="bg-gray-50 rounded-xl p-4 text-blue-400 text-sm leading-relaxed border border-gray-100">
                        {feedback.answer || <span className="text-gray-400 italic">답변을 작성하지 않았습니다.</span>}
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-orange-600 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                        개선할 점
                    </h4>
                    <div className="bg-orange-50/50 rounded-xl p-4 border border-orange-100">
                        <p className="text-sm text-orange-400 leading-relaxed whitespace-pre-line">
                            {feedback.improvements}
                        </p>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-blue-500 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>
                        모범 답안 가이드
                    </h4>
                    <div className="bg-blue-50/50 rounded-xl p-4 text-blue-400 text-sm leading-relaxed border border-blue-100">
                        {feedback.modelAnswer}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
