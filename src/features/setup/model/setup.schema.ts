import { z } from "zod"

export const setupSchema = z
    .object({
        keywords: z.array(z.string()).min(1, {
            message: "키워드를 최소 1개 입력해주세요.",
        }),

        count: z.coerce
            .number({
                message: "질문 개수는 숫자여야 합니다.",
            })
            .min(1, { message: "질문 개수는 최소 1개입니다." })
            .max(20, { message: "질문 개수는 최대 20개입니다." }),

        interviewType: z.enum(["company", "school"], {
            message: "면접 유형을 선택해주세요.",
        }),

        subType: z.string().min(1, {
            message: "세부 유형을 선택해주세요.",
        }),

        domain: z.string().optional(),
    })
    .superRefine((data, ctx) => {
        if (data.interviewType === "company") {
            if (!data.domain || data.domain.trim() === "") {
                ctx.addIssue({
                    code: z.ZodIssueCode.custom,
                    message: "회사 도메인을 입력해주세요.",
                    path: ["domain"],
                })
            }
        }
    })
