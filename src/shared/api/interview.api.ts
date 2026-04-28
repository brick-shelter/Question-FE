import { ApiHelper } from "./api.base"
import { API_PATH } from "./api.path"
import type {
    CompanyQuestionsRequest,
    UniversityQuestionsRequest,
    QuestionsResponse,
    FeedbackRequest,
    FeedbackResponse,
} from "@/shared/model/api.type"

const AI_TIMEOUT = 120000

export const generateCompanyQuestions = (data: CompanyQuestionsRequest): Promise<QuestionsResponse> =>
    ApiHelper.post<QuestionsResponse>(API_PATH.INTERVIEW.QUESTIONS.COMPANY, data, { timeout: AI_TIMEOUT })

export const generateUniversityQuestions = (data: UniversityQuestionsRequest): Promise<QuestionsResponse> =>
    ApiHelper.post<QuestionsResponse>(API_PATH.INTERVIEW.QUESTIONS.UNIVERSITY, data, { timeout: AI_TIMEOUT })

export const generateFeedback = (data: FeedbackRequest): Promise<FeedbackResponse> =>
    ApiHelper.post<FeedbackResponse>(API_PATH.INTERVIEW.FEEDBACK, data, { timeout: AI_TIMEOUT })
