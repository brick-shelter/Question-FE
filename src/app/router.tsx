import { LandingPage } from "@/pages/landing/LandingPage"
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
    ],
    {
        basename: "/",
    }
)
