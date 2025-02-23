import {  individualRegistrationSchema } from "@/features/individual-registration/schema"
import { z } from "zod"
import { useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "./ui/button"


interface FormProgressProps {
    currentStep?: number
    setCurrentStep?: React.Dispatch<React.SetStateAction<number>>
    steps?: string[]
  }
const individualPersonalSchema = individualRegistrationSchema.pick({
  password: true,  
  confirmPassword: true, 
  email: true
})

type individualPersonalSchema = z.infer<typeof individualPersonalSchema>;

const CorporatePassword = ({currentStep = 0, setCurrentStep, steps = []}:FormProgressProps) => {

    const form = useForm<individualPersonalSchema>({
        resolver: zodResolver(individualPersonalSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
            email:""
        },
    })
    const onSubmit = (data: individualPersonalSchema) => {
        
        console.log(data)   
        handleNext()
        // navigate("/password")
    }
    const handleNext = () => {
        if (currentStep < steps.length) {
          setCurrentStep && setCurrentStep((prev: number) => prev + 1)
        }
      }
    
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Company Email" type="password" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Password" type="password" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Password" type="password" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
          
       
                <Button variant={"next"} 
                        type= "button" 
                        onClick={handleNext}
                        className="w-full p-4"
                >
                            {currentStep === 2  ? 'VERIFY ' : ' NEXT STEP'}
                </Button>
      </form>
    </Form>
  )
}
        
export default CorporatePassword;