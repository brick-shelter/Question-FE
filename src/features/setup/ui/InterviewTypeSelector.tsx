import React from "react"
import { motion } from "framer-motion"

const COMPANY_TYPES = ["스타트업", "중견기업", "대기업", "공기업"]

interface InterviewTypeSelectorProps {
    interviewType: "company" | "school" | ""
    subType: string
    domain: string
    onTypeChange: (type: "company" | "school") => void
    onSubTypeChange: (subType: string) => void
    onDomainChange: (domain: string) => void
}

export const InterviewTypeSelector: React.FC<InterviewTypeSelectorProps> = ({
    interviewType,
    subType,
    domain,
    onTypeChange,
    onSubTypeChange,
    onDomainChange,
}) => {
    return (
        <div>
            <label className="block text-sm font-bold text-blue-900 mb-3">면접 유형</label>

            <div className="grid grid-cols-2 gap-4 mb-4">
                {/* 회사 면접 */}
                <button
                    onClick={() => onTypeChange("company")}
                    className={`p-4 rounded-xl border-2 text-center transition-all
            ${
                interviewType === "company"
                    ? "border-blue-400 bg-blue-50 text-blue-600 font-bold"
                    : "border-blue-100 bg-white text-blue-700 hover:border-blue-200"
            }`}
                >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                    </svg>
                    회사 면접
                </button>

                {/* 학교 면접 */}
                <button
                    onClick={() => onTypeChange("school")}
                    className={`p-4 rounded-xl border-2 text-center transition-all
            ${
                interviewType === "school"
                    ? "border-blue-400 bg-blue-50 text-blue-600 font-bold"
                    : "border-blue-100 bg-white text-blue-700 hover:border-blue-200"
            }`}
                >
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v6.5" />
                    </svg>
                    학교 면접
                </button>
            </div>

            {/* 하위 옵션 */}
            <motion.div
                initial={false}
                animate={{ height: interviewType ? "auto" : 0, opacity: interviewType ? 1 : 0 }}
                className="overflow-hidden"
            >
                {interviewType === "company" && (
                    <div className="space-y-4 mt-2">
                        {/* 기업 형태 */}
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <p className="text-xs text-blue-700/60 mb-3 font-medium">어떤 형태의 기업인가요?</p>
                            <div className="flex flex-wrap gap-2">
                                {COMPANY_TYPES.map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => onSubTypeChange(type)}
                                        className={`px-4 py-2 rounded-lg text-sm transition-all
                      ${
                          subType === type
                              ? "bg-white border-2 border-blue-400 text-blue-600 font-bold shadow-sm"
                              : "bg-white border border-blue-200 text-blue-700 hover:border-blue-300"
                      }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 업종/도메인 */}
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                            <p className="text-xs text-blue-700/60 mb-3 font-medium">
                                회사의 업종/도메인을 입력해주세요.
                            </p>

                            <input
                                type="text"
                                placeholder="예: 물류, 에듀테크, 반도체"
                                value={domain}
                                onChange={(e) => onDomainChange(e.target.value)}
                                className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-blue-900"
                            />
                        </div>
                    </div>
                )}

                {interviewType === "school" && (
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-2">
                        <p className="text-xs text-blue-700/60 mb-3 font-medium">지원하시는 학과를 입력해주세요.</p>
                        <input
                            type="text"
                            placeholder="예: 소프트웨어과, 스마트기계과"
                            value={subType}
                            onChange={(e) => onSubTypeChange(e.target.value)}
                            className="w-full p-3 bg-white border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm text-blue-900"
                        />
                    </div>
                )}
            </motion.div>
        </div>
    )
}
