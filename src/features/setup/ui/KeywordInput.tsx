import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { XIcon } from "lucide-react"

interface KeywordInputProps {
    keywords: string[]
    onAdd: (kw: string) => void
    onRemove: (kw: string) => void
}

export const KeywordInput: React.FC<KeywordInputProps> = ({ keywords, onAdd, onRemove }) => {
    const [input, setInput] = React.useState("")

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault()
            const trimmed = input.trim()
            if (trimmed && !keywords.includes(trimmed) && keywords.length < 5) {
                onAdd(trimmed)
                setInput("")
            }
        }
        if (e.key === "Backspace" && input === "" && keywords.length > 0) {
            onRemove(keywords[keywords.length - 1])
        }
    }

    return (
        <div>
            <label className="block text-sm font-bold text-blue-900 mb-1">면접 키워드</label>
            <p className="text-xs text-blue-700/60 mb-3">
                기술 분야나 직무 키워드를 입력하고 Enter를 눌러주세요. (최대 5개)
            </p>

            <div className="flex flex-wrap items-center gap-2 p-3 bg-blue-50 border border-blue-200 rounded-xl focus-within:ring-2 focus-within:ring-blue-300 focus-within:border-transparent transition-all min-h-12">
                <AnimatePresence>
                    {keywords.map((kw) => (
                        <motion.span
                            key={kw}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-400 text-white text-sm font-medium rounded-full shadow-sm"
                        >
                            {kw}
                            <button
                                onClick={() => onRemove(kw)}
                                className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
                            >
                                <XIcon className="w-3 h-3" />
                            </button>
                        </motion.span>
                    ))}
                </AnimatePresence>
                {keywords.length < 5 && (
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={
                            keywords.length === 0 ? "예: 소프트웨어개발, React, 네트워크 보안" : "키워드 추가..."
                        }
                        className="flex-1 min-w-30 bg-transparent outline-none text-sm text-blue-900 placeholder-blue-700/40"
                    />
                )}
            </div>
        </div>
    )
}
