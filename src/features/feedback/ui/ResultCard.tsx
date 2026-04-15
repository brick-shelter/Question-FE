import React from "react"
import { motion } from "framer-motion"
import type { Feedback } from "@/shared/model/mockData"

interface ResultCardProps {
    index: number
    question: string
    answer: string
    feedback: Feedback
}

export const ResultCard: React.FC<ResultCardProps> = ({ index, question, answer, feedback }) => {
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
                delay: index * 0.15,
                duration: 0.5,
            }}
            className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden mb-8"
        >
            <div className="bg-blue-50 p-6 border-b border-blue-100">
                <div className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-blue-300 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                        Q{index + 1}
                    </div>
                    <h3 className="text-lg font-medium text-blue-400 pt-1 leading-relaxed">{question}</h3>
                </div>
            </div>

            <div className="p-6 space-y-6">
                <div>
                    <h4 className="text-sm font-bold text-blue-500 mb-2 flex items-center gap-2">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
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
                        {answer || <span className="text-gray-400 italic">답변을 작성하지 않았습니다.</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                        <h4 className="text-sm font-bold text-blue-500 mb-2 flex items-center gap-2">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                            </svg>
                            잘한 점
                        </h4>
                        <p className="text-sm text-blue-400 leading-relaxed">{feedback.strengths}</p>
                    </div>
                    <div className="bg-orange-50/50 rounded-xl p-4 border border-orange-100">
                        <h4 className="text-sm font-bold text-orange-600 mb-2 flex items-center gap-2">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                            개선할 점
                        </h4>
                        <p className="text-sm text-orange-400 leading-relaxed">{feedback.improvements}</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-bold text-blue-500 mb-2 flex items-center gap-2">
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
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

                <div className="flex justify-end items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-blue-300">이 답변의 점수</span>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-blue-400">{feedback.score}</span>
                            <span className="text-sm text-blue-300">/ 100</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
