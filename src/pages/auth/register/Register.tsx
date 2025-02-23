
import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import IndividualRegistration from "../individual/IndividualRegistration"
import CorporateRegistration from "../corporate/CompanyRegistration"

const steps = ["Individual", "Password", "Verify", "Complete"]
export default function Register() {
    const [activeForm, setActiveForm] = useState<"individual" | "corporate">("individual")
    const [currentStep, setCurrentStep] = useState(1)

  return (
    <>
    <Card className="max-w-[400px] sm:min-w-96 my-6 relative min-h-[470px] md:min-h[470px]">
      <CardHeader>
       {
        currentStep !== 4 && (
            <div className="text-center mb-2">
            {
                currentStep === 3 ? 
                ( <h1 className="text-xl sm:text-2xl ">Account Details</h1>):
               ( <h1 className="text-xl sm:text-2xl ">Register new Account</h1>)
            }
            <span className="text-xs sm:text-sm">Sign up for an account and start trading today</span>
            </div>
        )
       }
           {
            currentStep === 1 && (
                <div className="">
                <span className="text-xs sm:text-sm">Select select the category that best describes you</span>
                <div className="flex space-x-2  mt-2">
                    <Button variant={activeForm === "individual" ? "default" : "outline"} onClick={() => setActiveForm("individual")}>
                    Individual
                    </Button>
                    <Button variant={activeForm === "corporate" ? "default" : "outline"} onClick={() => setActiveForm("corporate")}>
                    Corporate
                    </Button>
                </div>
            
            </div>
            )
           }
      </CardHeader>
      <CardContent >
          {activeForm === "individual" ? 
          <IndividualRegistration steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} /> 
          :<CorporateRegistration steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />}
         
      </CardContent>
      
    </Card>
    <div className="mb-8 relative px-8">
          <div className="text-center mb-2 text-sm font-medium">
            {currentStep}<span className="opacity-30">/{steps.length}</span>
          </div>
          <div className="h-1 bg-[#E8ECEF] rounded-full relative">
            <div
              className="h-full bg-[#D71E0E] rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
            ></div>
            {steps.map((_step, index) => (
                <div
                key={index}
                className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2
                    ${index < currentStep ? "bg-[#D71E0E] border-[#D71E0E]" : "bg-white border-gray-300"}`}
                    style={{ left: `calc(${(index / (steps.length - 1)) * 100}%)`, transform: "translate(-50%, -50%)" }}
                    />
                ))}
          </div>
        </div>
    </>
  )
}

