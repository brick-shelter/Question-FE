export type Question = {
    id: string
    text: string
}

export type Feedback = {
    questionId: string
    score: number
    strengths: string
    improvements: string
    modelAnswer: string
}

export const MOCK_QUESTIONS: Record<string, Question[]> = {
    소프트웨어개발: [
        {
            id: "q1",
            text: "본인이 가장 자신 있는 프로그래밍 언어는 무엇이며, 그 이유는 무엇인가요?",
        },
        {
            id: "q2",
            text: "프로젝트를 진행하면서 겪었던 가장 큰 기술적 어려움과 해결 과정을 설명해주세요.",
        },
        { id: "q3", text: "객체지향 프로그래밍의 특징에 대해 설명해주세요." },
        {
            id: "q4",
            text: "팀 프로젝트에서 팀원과 의견 충돌이 발생했을 때 어떻게 해결했나요?",
        },
        { id: "q5", text: "우리 회사(또는 학과)에 지원하게 된 동기는 무엇인가요?" },
    ],
    네트워크: [
        { id: "q1", text: "OSI 7계층에 대해 간단히 설명해주세요." },
        { id: "q2", text: "TCP와 UDP의 차이점은 무엇인가요?" },
        {
            id: "q3",
            text: "네트워크 장비 중 라우터와 스위치의 역할 차이를 설명해주세요.",
        },
        {
            id: "q4",
            text: "학교 실습 중 가장 기억에 남는 네트워크 구축 경험을 이야기해주세요.",
        },
        { id: "q5", text: "입사 후 어떤 네트워크 엔지니어로 성장하고 싶나요?" },
    ],
    디자인: [
        {
            id: "q1",
            text: "본인의 디자인 철학이나 가장 중요하게 생각하는 디자인 원칙은 무엇인가요?",
        },
        {
            id: "q2",
            text: "포트폴리오 중 가장 애착이 가는 작품과 그 이유를 설명해주세요.",
        },
        { id: "q3", text: "UX와 UI의 차이를 본인의 언어로 설명해주세요." },
        {
            id: "q4",
            text: "디자인 트렌드를 파악하기 위해 평소 어떤 노력을 하고 있나요?",
        },
        {
            id: "q5",
            text: "피드백을 수용하여 디자인을 개선했던 경험을 이야기해주세요.",
        },
    ],
    default: [
        { id: "q1", text: "1분 자기소개를 부탁드립니다." },
        { id: "q2", text: "본인의 장단점은 무엇인가요?" },
        {
            id: "q3",
            text: "학교 생활 중 가장 열정적으로 참여했던 활동은 무엇인가요?",
        },
        { id: "q4", text: "실패했던 경험과 그로부터 배운 점을 설명해주세요." },
        { id: "q5", text: "마지막으로 하고 싶은 질문이나 말이 있나요?" },
    ],
}

export const generateMockFeedback = (questionId: string, answer: string): Feedback => {
    // Simple logic to generate somewhat varied feedback based on answer length
    const length = answer.length
    let score = 0
    let strengths = ""
    let improvements = ""

    if (length < 20) {
        score = 55
        strengths = "질문의 의도를 파악하려고 노력했습니다."
        improvements = "답변이 너무 짧습니다. 구체적인 경험이나 사례를 들어 상세하게 설명하는 것이 좋습니다."
    } else if (length < 50) {
        score = 75
        strengths = "핵심적인 내용을 간결하게 전달했습니다."
        improvements = "조금 더 구체적인 사례를 덧붙인다면 훨씬 설득력 있는 답변이 될 것입니다."
    } else {
        score = 92
        strengths = "구체적인 사례를 들어 논리적으로 잘 설명했습니다. 자신감 있는 태도가 엿보입니다."
        improvements = "전반적으로 훌륭합니다. 결론을 먼저 말하는 두괄식 구조를 조금 더 다듬으면 완벽하겠습니다."
    }

    // Generate a generic model answer based on the question ID
    const modelAnswers: Record<string, string> = {
        q1: "저는 [언어/기술]에 가장 자신 있습니다. 그 이유는 [구체적 이유] 때문입니다. 실제로 [프로젝트 경험]에서 이 기술을 활용하여 [성과]를 낸 경험이 있습니다.",
        q2: "[프로젝트 명]을 진행할 때 [구체적 문제 상황]이 발생했습니다. 이를 해결하기 위해 [해결 과정 1], [해결 과정 2]를 시도했고, 결과적으로 [긍정적 결과]를 얻을 수 있었습니다. 이 경험을 통해 [배운 점]을 깨달았습니다.",
        q3: "객체지향 프로그래밍은 캡슐화, 상속, 다형성, 추상화라는 4가지 주요 특징을 가집니다. 이를 통해 코드의 재사용성을 높이고 유지보수를 용이하게 할 수 있습니다.",
        q4: "팀 프로젝트 중 [의견 충돌 상황]이 있었습니다. 저는 먼저 상대방의 의견을 경청하고, [나의 의견]과 조율점을 찾기 위해 [구체적 노력]을 했습니다. 그 결과 [합의된 결과]를 도출하여 프로젝트를 성공적으로 마칠 수 있었습니다.",
        q5: "제가 [회사/학과]에 지원한 이유는 [구체적 동기] 때문입니다. 저의 [본인의 강점/경험]이 [회사/학과의 비전/목표]와 잘 부합한다고 생각하며, 입사 후 [구체적 포부]를 이루고 싶습니다.",
    }

    return {
        questionId,
        score,
        strengths,
        improvements,
        modelAnswer:
            modelAnswers[questionId] ||
            "질문의 핵심을 파악하고, 본인의 경험을 바탕으로 구체적이고 논리적으로 답변하는 것이 중요합니다. 두괄식으로 결론을 먼저 말하고 사례를 덧붙이세요.",
    }
}
