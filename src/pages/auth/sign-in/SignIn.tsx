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
import { LucideCheckSquare } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"


const individualPersonalSchema = individualRegistrationSchema.pick({
  password: true,  
  email: true
})

type individualPersonalSchema = z.infer<typeof individualPersonalSchema>;

const SignIn = () => {
const navigate = useNavigate()
    const form = useForm<individualPersonalSchema>({
        resolver: zodResolver(individualPersonalSchema),
        defaultValues: {
            password: "",
            email:""
        },
    })
    const onSubmit = (data: individualPersonalSchema) => {
        
        console.log(data)   
        navigate("/dashboard")    
    }
  
    const handlePrevious = () => {
        navigate("/welcome")
    }
    
  return (
    <Card className="max-w-[900px] sm:min-w-96 px-4 my-6 relative  md:min-h[470px]">
    <CardHeader>
          <div className="text-center mb-2">
              <h1 className="text-xl sm:text-2xl ">Sign In to ComX</h1>
              <span className="text-xs sm:text-sm">Enter your Login Credentials below</span>
          </div>

    </CardHeader>
    <CardContent >
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
        <div className="flex text-sm justify-between items-center">
            <div className="flex text-nowrap">
            {/* <Checkbox checked={field.value} /> */}
            <p>Stay Signed in</p>
            </div>
            <Button variant={"next"} 
                        type= "button" 
                        // onClick={handleNext}
                        className="w-full p-4"
                >
                           Forgot Password?
                </Button>
        </div>
          
       
                <Button variant={"secondary"} 
                        type= "button" 
                        className="w-full p-4"
                        onClick={() => navigate('/auth/password-reset')}
                >
                            Sign in
                </Button>
                <Button variant={"outline"} 
                        type= "button" 
                        onClick={handlePrevious}
                        className="w-full p-4"
                >
                            Back
                </Button>
      </form>
    </Form>
    </CardContent >
    
  </Card>
   
  )
}
        
export default SignIn;