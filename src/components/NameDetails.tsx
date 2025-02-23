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
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useAuthRegistrationStore } from "@/features/zustand/Store"
import { useState } from "react"
import Toast from "./Toast"



interface FormProgressProps {
    currentStep?: number
    setCurrentStep?: (num:number) => void
    steps?: string[]
  }
const individualPersonalSchema = individualRegistrationSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
})

type individualPersonalSchema = z.infer<typeof individualPersonalSchema>;

const NameDetails = ({currentStep = 0, setCurrentStep, steps}:FormProgressProps) => {
  const [list, setList] = useState<any>([]);
  let toastProperties = null;

  interface ToastProperties {
    id: number;
    title: string;
    description: string;
    backgroundColor: string;
  }

  const showToast = (type: string) => {
    switch(type) {
      case 'danger':
        toastProperties = {
          id: list.length + 1,
          title: 'Phone number has already been used',
          backgroundColor: '#ffff',
        } as ToastProperties;
        break;
      default:
        toastProperties = {} as ToastProperties;
    }
    setList([...list, toastProperties]);
  };
  const setData = useAuthRegistrationStore(state => state.setData);
    const form = useForm<individualPersonalSchema>({
        resolver: zodResolver(individualPersonalSchema),
        defaultValues: {
            firstName:"",
            lastName:"",
            email:"",
        },
    })
    const onSubmit = (data: individualPersonalSchema) => {
      setData(data)  
      console.log(data)   
        handleNext()
    }
    const handleNext = () => {
        if (currentStep < (steps?.length ?? 0)) {
          setCurrentStep && setCurrentStep(currentStep + 1)
        }
      }

      

    
  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="space-x-2 flex">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FirstName</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your First" {...field} />
              </FormControl>
              <FormMessage  className="text-red-500 font-medium" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>LastName</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Enter your Lastname" {...field} />
              </FormControl>
              <FormMessage  className="text-red-500 font-medium" />
            </FormItem>
          )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your Email" {...field} />
              </FormControl>
              <FormMessage  className="text-red-500 font-medium" />
            </FormItem>
          )}
          />
      <Toast toastlist={list} position="buttom-right" setList={setList} />

        
                <Button variant={"next"} 
                        type= "submit" 
                        onClick={() => showToast('danger')}
                        className="w-full p-4"
                        >
                            {currentStep === 2  ? 'VERIFY ' : ' NEXT STEP'}
                </Button>

      </form>
    </Form>
                  </>
  )
}
        
export default NameDetails;