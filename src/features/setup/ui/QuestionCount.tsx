import React from "react"

interface QuestionCountProps {
    count: number
    onChangeCount: (e: number) => void
}

export const QuestionCount: React.FC<QuestionCountProps> = ({ count, onChangeCount }) => {
    return (
        <div>
            <label className="block text-sm font-bold text-blue-900 mb-1">질문 개수</label>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                <p className="text-xs text-blue-700/60 mb-3 font-medium">
                    원하는 질문 개수를 입력해주세요. (최소 1개 ~ 최대 20개)
                </p>

                <input
                    type="number"
                    placeholder="원하는 질문 개수를 입력해주세요"
                    value={count === 0 ? "" : count}
                    onChange={(e) => {
                        const value = Number(e.target.value)
                        onChangeCount(isNaN(value) ? 0 : value)
                    }}
                    onBlur={(e) => {
                        let value = Number(e.target.value)

                        if (isNaN(value) || value < 1) value = 1
                        if (value > 20) value = 20

                        onChangeCount(value)
                    }}
                    min={1}
                    max={20}
                    className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-blue-900"
                />
            </div>
        </div>
    )
}
