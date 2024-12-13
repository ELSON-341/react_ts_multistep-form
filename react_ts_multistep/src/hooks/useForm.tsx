import { ReactElement, FormEvent, useState } from "react";

export function UseForm(steps: ReactElement[]) {
    const [currentStep, setCurretsp] = useState(0)

    function changeSteps(i: number, e?:FormEvent) {
        if (e) e.preventDefault()

        if (i < 0 || i >= steps.length) return

        setCurretsp(i)

    }
    
    return {
        changeSteps,
        currentComponent: steps[currentStep],
        currentStep
    }
}
