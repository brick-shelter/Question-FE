import React from "react"
import { motion } from "framer-motion"

interface ScoreCircleProps {
    score: number
}

export const ScoreCircle: React.FC<ScoreCircleProps> = ({ score }) => {
    const RADIUS = 56
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS

    return (
        <div className="relative">
            <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r={RADIUS} stroke="#F0F7FF" strokeWidth="12" fill="none" />
                <motion.circle
                    cx="64"
                    cy="64"
                    r={RADIUS}
                    stroke="#6BA4D9"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={CIRCUMFERENCE}
                    initial={{ strokeDashoffset: CIRCUMFERENCE }}
                    animate={{ strokeDashoffset: CIRCUMFERENCE - (CIRCUMFERENCE * score) / 100 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-3xl font-bold text-blue-900">{score}</span>
                <span className="text-sm text-blue-700/60 block">/ 100</span>
            </div>
        </div>
    )
}
