import React from "react"
import { motion } from "framer-motion"
import { ScoreCircle } from "./ScoreCircle"
import type { OverallEvaluation } from "@/shared/model/api.type"

interface FeedbackSummaryProps {
    overallEvaluation: OverallEvaluation
}

export const FeedbackSummary: React.FC<FeedbackSummaryProps> = ({ overallEvaluation }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-md border border-blue-200 p-8 mb-10 text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-200 via-blue-400 to-blue-200" />

            <h2 className="text-2xl font-bold text-blue-900 mb-6">종합 면접 평가 결과</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <ScoreCircle score={overallEvaluation.score} />

                <div className="text-left max-w-md">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{overallEvaluation.title}</h3>
                    <p className="text-blue-700/60 text-sm leading-relaxed">{overallEvaluation.content}</p>
                </div>
            </div>
        </motion.div>
    )
}
