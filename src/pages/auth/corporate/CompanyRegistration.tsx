
import IndividualVerify from "@/components/IndividualVerify"
import CompleteRegister from "@/components/CompleteRegister"
import CorporateDetails from "@/components/CorporateDetails"
import CorporatePassword from "@/components/CorporatePassword"


interface FormProgressProps {
    currentStep: number
    setCurrentStep: (num: number | ((prev: number) => number)) => void
    steps: string[]
  }

const CorporateRegistration = ({currentStep,setCurrentStep, steps}:FormProgressProps) => {
   
  return (
           <>
            {currentStep === 1 && (<CorporateDetails steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}/>)}
            {currentStep === 2 && (<CorporatePassword steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}/>)}
            { currentStep === 3 && (<IndividualVerify steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep}/> )}
            {currentStep === 4 && (<CompleteRegister/>) }
            </>
  )
}

export default CorporateRegistration