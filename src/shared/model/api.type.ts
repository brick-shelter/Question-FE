export interface ApiResponse<T> {
    success: boolean
    message: string
    data: T
    errorCode?: string
}

export interface CompanyQuestionsRequest {
    keywords: string[]
    questionCount: number
    companyType?: string
    domain?: string
}

export interface UniversityQuestionsRequest {
    keywords: string[]
    questionCount: number
    major?: string
}

export interface QuestionsResponse {
    questions: string[]
}

export interface FeedbackRequest {
    qaList: Array<{
        question: string
        answer: string
    }>
}

export interface QuestionFeedback {
    question: string
    answer: string
    improvements: string
    modelAnswer: string
}

export interface OverallEvaluation {
    title: string
    content: string
    score: number
}

export interface FeedbackResponse {
    questionFeedbacks: QuestionFeedback[]
    overallEvaluation: OverallEvaluation
}
