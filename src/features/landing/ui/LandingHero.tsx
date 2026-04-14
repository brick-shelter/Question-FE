import React from "react"
import { motion } from "framer-motion"

export const LandingHero: React.FC = () => {
    return (
        <>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="w-20 h-20 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100"
            >
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                </svg>
            </motion.div>

            <h1 className="text-4xl font-bold text-blue-500 mb-3 tracking-tight">질문있어요</h1>
            <p className="text-lg text-blue-400 mb-8 leading-relaxed">
                마이스터고 3학년을 위한
                <br />
                <span className="font-semibold text-blue-400">맞춤형 AI 면접 준비 서비스</span>
            </p>
        </>
    )
}
