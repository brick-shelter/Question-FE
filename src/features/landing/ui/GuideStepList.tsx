import React from "react"

const GUIDE_STEPS = [
    { num: 1, text: "지원 분야와 면접 유형을 선택하세요" },
    { num: 2, text: "맞춤형 예상 질문에 답변을 작성하세요" },
    { num: 3, text: "AI의 피드백과 모범 답안을 확인하세요" },
]

export const GuideStepList: React.FC = () => {
    return (
        <div className="space-y-4 mb-10 text-sm text-blue-400 text-left bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50">
            {GUIDE_STEPS.map(({ num, text }) => (
                <div key={num} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold text-xs">
                        {num}
                    </div>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    )
}
