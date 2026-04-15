import React from "react"
import { QuestionCard } from "./QuestionCard"
import type { Question } from "@/shared/model/mockData"

interface QuestionListProps {
    questions: Question[]
    answers: Record<string, string>
    onAnswerChange: (id: string, value: string) => void
}

export const QuestionList: React.FC<QuestionListProps> = ({ questions, answers, onAnswerChange }) => {
    return (
        <div className="space-y-6">
            {questions.map((q, index) => (
                <QuestionCard
                    key={q.id}
                    index={index}
                    question={q.text}
                    answer={answers[q.id] || ""}
                    onChange={(val) => onAnswerChange(q.id, val)}
                />
            ))}
        </div>
    )
}
