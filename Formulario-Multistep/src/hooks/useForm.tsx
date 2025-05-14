// Hook personalizado do formulário
import { useState, type FormEvent, type ReactElement } from "react";

export default function useForm(steps: ReactElement[]){
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(num: number, e?: FormEvent){
        if(e){e.preventDefault();}

        if(num < 0 || num >= steps.length){return;}
        setCurrentStep(num);
    }
    
    return {
        currentStep,
        currentComponent: steps[currentStep], 
        changeStep,
    };
}