import React from "react"
import { ResultCard } from "./ResultCard"
import type { QuestionFeedback } from "@/shared/model/api.type"

interface FeedbackListProps {
    questionFeedbacks: QuestionFeedback[]
}

export const FeedbackList: React.FC<FeedbackListProps> = ({ questionFeedbacks }) => {
    return (
        <div>
            <h3 className="text-xl font-bold text-blue-900 px-2 mb-6">질문별 상세 피드백</h3>
            <div className="space-y-8">
                {questionFeedbacks.map((feedback, index) => (
                    <ResultCard key={index} index={index} feedback={feedback} />
                ))}
            </div>
        </div>
    )
}
