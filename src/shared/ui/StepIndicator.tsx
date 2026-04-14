import React from "react"
import { motion } from "framer-motion"
interface StepIndicatorProps {
    currentStep: number
}
export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
    const steps = [
        {
            num: 1,
            label: "시작하기",
        },
        {
            num: 2,
            label: "면접 설정",
        },
        {
            num: 3,
            label: "답변 작성",
        },
        {
            num: 4,
            label: "피드백 결과",
        },
    ]
    return (
        <div className="w-full max-w-3xl mx-auto mb-8 px-4">
            <div className="flex justify-between items-center relative">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-blue-100 -z-10 rounded-full"></div>

                <motion.div
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-400 -z-10 rounded-full"
                    initial={{
                        width: "0%",
                    }}
                    animate={{
                        width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                />

                {steps.map((step) => {
                    const isActive = step.num === currentStep
                    const isCompleted = step.num < currentStep
                    return (
                        <div key={step.num} className="flex flex-col items-center">
                            <motion.div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm
                  ${isActive ? "bg-blue-400 text-white ring-4 ring-blue-100" : isCompleted ? "bg-blue-300 text-white" : "bg-white text-blue-300 border-2 border-blue-200"}`}
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    backgroundColor:
                                        isActive || isCompleted ? (isActive ? "#4A90C4" : "#6BA4D9") : "#FFFFFF",
                                }}
                            >
                                {isCompleted ? (
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
                                            strokeWidth={3}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                ) : (
                                    step.num
                                )}
                            </motion.div>
                            <span
                                className={`mt-2 text-xs font-medium ${isActive ? "text-blue-400" : "text-blue-300"}`}
                            >
                                {step.label}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
