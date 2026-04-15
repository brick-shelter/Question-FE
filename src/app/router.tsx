import { LandingPage } from "@/pages/landing/LandingPage"
import { QuestionsPage } from "@/pages/questions/QuestionsPage"
import { ResultsPage } from "@/pages/results/ResultsPage"
import { SetupPage } from "@/pages/setup/SetupPage"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <LandingPage />,
        },
        {
            path: "/setup",
            element: <SetupPage />,
        },
        {
            path: "/questions",
            element: <QuestionsPage />,
        },
        {
            path: "/results",
            element: <ResultsPage />,
        },
    ],
    {
        basename: "/",
    }
)
