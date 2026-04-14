import React from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

export const StartButton: React.FC = () => {
    const navigate = useNavigate()

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/setup")}
                className="w-full py-4 bg-blue-400 hover:bg-blue-500 text-white rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all"
            >
                면접 준비 시작하기
            </motion.button>
        </>
    )
}
