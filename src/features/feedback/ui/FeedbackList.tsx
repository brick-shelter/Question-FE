import React from "react"
import { ResultCard } from "./ResultCard"
import type { Question, Feedback } from "@/shared/model/mockData"

interface FeedbackListProps {
    questions: Question[]
    answers: Record<string, string>
    feedbacks: Feedback[]
}

export const FeedbackList: React.FC<FeedbackListProps> = ({ questions, answers, feedbacks }) => {
    return (
        <div>
            <h3 className="text-xl font-bold text-blue-900 px-2 mb-6">질문별 상세 피드백</h3>
            <div className="space-y-8">
                {questions.map((q, index) => {
                    const feedback = feedbacks.find((f) => f.questionId === q.id)
                    if (!feedback) return null
                    return (
                        <ResultCard
                            key={q.id}
                            index={index}
                            question={q.text}
                            answer={answers[q.id]}
                            feedback={feedback}
                        />
                    )
                })}
            </div>
        </div>
    )
}
