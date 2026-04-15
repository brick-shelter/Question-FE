import React from "react"
import { StepIndicator } from "@/shared/ui/StepIndicator"
import { SetupForm } from "@/features/setup/ui/SetupForm"

export const SetupPage: React.FC = () => {
    return (
        <div className="min-h-screen py-12 px-4">
            <StepIndicator currentStep={2} />
            <SetupForm />
        </div>
    )
}
