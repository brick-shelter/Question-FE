import React from "react"

interface AnswerSubmitBarProps {
    answeredCount: number
    totalCount: number
    onSubmit: () => void
}

export const AnswerSubmitBar: React.FC<AnswerSubmitBarProps> = ({ answeredCount, totalCount, onSubmit }) => {
    return (
        <div className="mt-10 flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
            <p className="text-sm text-blue-700">
                <span className="font-bold text-blue-500">{answeredCount}</span>/{totalCount}개 답변 완료
            </p>
            <button
                onClick={onSubmit}
                className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-bold shadow-sm transition-colors flex items-center gap-2"
            >
                답변 제출하고 피드백 받기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    )
}
