import {  individualRegistrationSchema } from "@/features/individual-registration/schema"
import { z } from "zod"
import { useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "./ui/button"
import { useAuthRegistrationStore } from "@/features/zustand/Store"


interface FormProgressProps {
    currentStep?: number
    setCurrentStep?: (num:number) => void
    steps?: string[]
  }
const individualPersonalSchema = individualRegistrationSchema.pick({
  password: true,  
  confirmPassword: true, 
  phoneNumber: true
})

type individualPersonalSchema = z.infer<typeof individualPersonalSchema>;

const PasswordDetails = ({currentStep,setCurrentStep, steps}:FormProgressProps) => {
const setData = useAuthRegistrationStore(state => state.setData);
    const form = useForm<individualPersonalSchema>({
        resolver: zodResolver(individualPersonalSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
            phoneNumber:""
        },
    })
    const onSubmit = (data: individualPersonalSchema) => {
        setData(data)
        console.log(data)   
        handleNext()
        // navigate("/password")
    }
    const handleNext = () => {
        if (currentStep !== undefined && steps && currentStep < steps.length) {
          setCurrentStep && setCurrentStep(currentStep + 1)
        }
      }
    
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
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
          <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-nowrap">Phone Number</FormLabel>
              <FormControl>
              <div className="space-x-2 w-full  flex relative">
             
             <Select>
          <SelectTrigger className="max-w-24">
            <SelectValue placeholder="+234" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup {...field} >
              <SelectItem value="apple">+234</SelectItem>
              <SelectItem value="banana">+77</SelectItem>
              <SelectItem value="blueberry">+1</SelectItem>
              <SelectItem value="grapes">+334</SelectItem>
              <SelectItem value="pineapple">+829</SelectItem>
            </SelectGroup>
          </SelectContent>
      </Select>
              <Input className="w-full" placeholder="Enter your Number" type="phoneNumber" {...field} />
      
             </div>
              
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
       
                <Button variant={"next"} 
                        type= "submit" 
                        className="w-full p-4"
                >
                            {currentStep === 2  ? 'VERIFY ' : ' NEXT STEP'}
                </Button>
      </form>
    </Form>
  )
}
        
export default PasswordDetails;