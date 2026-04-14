import React from "react"
import { motion } from "framer-motion"
import { LandingHero } from "@/features/landing/ui/LandingHero"
import { GuideStepList } from "@/features/landing/ui/GuideStepList"
import { StartButton } from "@/features/landing/ui/StartButton"

export const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-lg h-128 bg-blue-500 rounded-full mix-blend-multiply filter blur-[200px] opacity-30 animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 animate-blob animation-delay-2000" />
            <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[314px] opacity-30 animate-blob animation-delay-4000" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-md w-full bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl border border-white relative z-10 text-center"
            >
                <LandingHero />
                <GuideStepList />
                <StartButton />
            </motion.div>
        </div>
    )
}
