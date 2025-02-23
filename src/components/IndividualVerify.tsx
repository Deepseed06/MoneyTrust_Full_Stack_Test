import {  individualRegistrationSchema } from "@/features/individual-registration/schema"
import { z } from "zod"
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useAuthRegistrationStore } from "@/features/zustand/Store"


interface FormProgressProps {
    currentStep?: number
    setCurrentStep?: (num:number ) => void 
    steps?: string[]
  }
const individualPersonalSchema = individualRegistrationSchema.pick({
  code: true,
})

type individualPersonalSchema = z.infer<typeof individualPersonalSchema>;

const IndividualVerify = ({currentStep,setCurrentStep, steps}:FormProgressProps) => {
const firstName = useAuthRegistrationStore(state => state.firstName);
const lastName = useAuthRegistrationStore(state => state.lastName);
const email = useAuthRegistrationStore(state => state.email);
const password = useAuthRegistrationStore(state => state.password);
const confirmPassword = useAuthRegistrationStore(state => state.confirmPassword);
    const form = useForm<individualPersonalSchema>({
        resolver: zodResolver(individualPersonalSchema),
        defaultValues: {
           code: ""
        },
    })
    const onSubmit = (data: individualPersonalSchema) => {
        console.log({
          ...data,
          firstName,
          lastName,
          email,
          password,
          confirmPassword
        })   
        handleNext()
    }
    const handleNext = () => {
        if (currentStep < steps?.length) {
          setCurrentStep((prev:number) => prev + 1)
        }
      }
    const handlePrevious = () => {
        if (currentStep < steps?.length) {
          setCurrentStep((prev:number) => prev - 1)
        }
      }
    
  return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="mb-32">
            <span className="text-xs sm:text-sm ">Enter the 4-digit code that was sent to name@mymail.com</span>
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
              <FormItem>
              <FormControl>
                <Input type="text" className="mt-2" placeholder="Enter your First" {...field} />
              </FormControl>
              <FormMessage  className="text-red-500 font-medium" />
            </FormItem>
          )}
          />
           <div className="space-y-2 flex flex-col">
                <span className="text-xs cursor-pointer text-[#98A9BC] sm:text-sm">Resend Code</span>
                <span className="text-xs cursor-pointer text-[#98A9BC] sm:text-sm">Verify via Phone Call</span>
            </div>
        
    </div>
        <div className="flex  justify-between ">  
            <Button variant={"next"} type="submit" onClick={handlePrevious} className="text-black inline-flex justify-start">
                BACK
            </Button>
            <Button variant={"next"} type="submit" className="inline-flex justify-end">
                FINISH
            </Button>
            </div>

      </form>
    </Form>
  )
}
        
export default IndividualVerify;