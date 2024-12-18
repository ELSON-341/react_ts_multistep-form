import { ReactElement, FormEvent, useState } from "react";

export function UseForm(steps: ReactElement[]) {
    const [currentStep, setCurretStep] = useState(0)

    function changeSteps(i: number, e?:FormEvent) {
        if (e) e.preventDefault()

        if (i < 0 || i >= steps.length) return

        setCurretStep(i)
    }
    
    return {
        changeSteps,
        currentComponent: steps[currentStep],
        currentStep,
        isLastStep: currentStep + 1 === steps.length ? true : false
    }
}