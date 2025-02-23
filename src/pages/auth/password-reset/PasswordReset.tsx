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
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader } from "@/components/ui/card"


const individualPersonalSchema = individualRegistrationSchema.pick({
  email: true,
})

type individualPersonalSchema = z.infer<typeof individualPersonalSchema>;

const PasswordReset = () => {
  const navigate = useNavigate();
    const form = useForm<individualPersonalSchema>({
        resolver: zodResolver(individualPersonalSchema),
        defaultValues: {
           email: ""
        },
    })
    const onSubmit = (data: individualPersonalSchema) => {
        console.log(data)   
        
    }
    const handlePrevious = () => {
       navigate('/auth/sign-in')
      }
    
  return (
    <Card className="max-w-[900px] sm:min-w-96 px-4 my-6 relative  md:min-h[470px]">
    <CardHeader>
          <div className="text-center mb-2">
              <h1 className="text-xl sm:text-2xl ">Password Reset</h1>
              <span className="text-xs sm:text-sm">Reset your password to continue trading on ComX</span>
          </div>

    </CardHeader>
    <CardContent >
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="mb-32">
            <span className="text-xs sm:text-sm ">Enter the Email address you registered with</span>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
              <FormItem>
              <FormControl>
                <Input type="text" className="mt-2" placeholder="Enter your Email" {...field} />
              </FormControl>
              <FormMessage  className="text-red-500 font-medium" />
            </FormItem>
          )}
          />
           <div className="space-y-2 flex flex-col text-center">
                <span className="text-xs cursor-pointer text-[#98A9BC]">Note that you&npos;ll be sent an OTP to the email address provided </span>
            </div>
        
    </div>
        <div className="flex  justify-between ">  
            <Button variant={"next"} type="submit" onClick={handlePrevious} className="text-black inline-flex justify-start">
                BACK
            </Button>
            <Button variant={"next"} type="button" onClick={() => navigate('/auth/password-verify')} className="inline-flex justify-end">
                FINISH
            </Button>
            </div>

      </form>
    </Form>
    </CardContent>
    
  </Card>
      
  )
}
        
export default PasswordReset;