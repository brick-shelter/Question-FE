import React from "react"
import { motion } from "framer-motion"
import { ScoreCircle } from "./ScoreCircle"

interface FeedbackSummaryProps {
    totalScore: number
}

const getScoreMessage = (score: number) => {
    if (score >= 90) return "훌륭합니다! 면접 준비가 아주 잘 되어있어요."
    if (score >= 70) return "좋습니다! 조금만 더 다듬으면 완벽하겠어요."
    return "괜찮습니다! 피드백을 바탕으로 계속 연습해보세요."
}

export const FeedbackSummary: React.FC<FeedbackSummaryProps> = ({ totalScore }) => {
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
                <ScoreCircle score={totalScore} />

                <div className="text-left max-w-md">
                    <h3 className="text-lg font-bold text-blue-900 mb-2">{getScoreMessage(totalScore)}</h3>
                    <p className="text-blue-700/60 text-sm leading-relaxed">
                        전체적으로 본인의 경험을 잘 전달하려고 노력했습니다. 아래 각 질문별 상세 피드백과 모범 답안을
                        확인하고, 부족한 부분을 보완하여 다음 면접을 준비해보세요.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
