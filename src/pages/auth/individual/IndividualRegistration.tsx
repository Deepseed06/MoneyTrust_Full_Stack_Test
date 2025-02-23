
import IndividualPassword from "@/components/PasswordDetails"
import NameDetails from "@/components/NameDetails"
import IndividualVerify from "@/components/IndividualVerify"
import CompleteRegister from "@/components/CompleteRegister"


interface FormProgressProps {
    currentStep: number
    setCurrentStep: (num:number) => void
    steps: string[]
  }

const individualRegistration = ({currentStep,setCurrentStep, steps}:FormProgressProps) => {
   
  return (
           <>
            {currentStep === 1 && (<NameDetails steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}/>)}
            {currentStep === 2 && (<IndividualPassword steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}/>)}
            { currentStep === 3 && (<IndividualVerify steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}/> )}
            {currentStep === 4 && (<CompleteRegister/>) }
            </>
  )
}

export default individualRegistration