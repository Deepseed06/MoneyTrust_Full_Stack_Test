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
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { corporateRegistrationSchema } from "@/features/company-registration/schema"
import { cn } from "@/lib/utils"
import { format } from "date-fns"



interface FormProgressProps {
    currentStep?: number
    setCurrentStep?: (num: number | ((prev: number) => number)) => void
    steps?: string[]
  }
const corporatePersonalSchema = corporateRegistrationSchema.pick({
  companyName: true,
  email: true,
  business: true,
})

type corporatePersonalSchema = z.infer<typeof corporatePersonalSchema>;

const CorporateDetails = ({currentStep = 0, setCurrentStep, steps = []}:FormProgressProps) => {
    const [date, setDate] = useState<Date>()
    
    const form = useForm<corporatePersonalSchema>({
        resolver: zodResolver(corporatePersonalSchema),
        defaultValues: {
            companyName:"",
            email:"",
            business:"",
        },
    })
    const onSubmit = (data: corporatePersonalSchema) => {
        console.log(data)   
        handleNext()
    }
    const handleNext = () => {
        if (currentStep < steps?.length) {
          setCurrentStep && setCurrentStep((prev:number) => prev + 1)
        }
      }

      

    
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input type="text" className="w-full" placeholder="Enter Company Name" {...field} />
              </FormControl>
              <FormMessage  className="text-red-500 font-medium" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="business"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <div className="flex flex-col sm:flex-row space-x-2 ">
                
                <div className="space-y-2" >
                  <Label htmlFor="business" className="text-nowrap">Type of Business</Label>
                  <Select >
                    <SelectTrigger id="business" className="min-w-44 flex-1 flex">
                      <SelectValue id="name" placeholder="Select Type of Business"  {...field} className="border-0 bg-transparent shadow-none text-sm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comm">E-Commerce</SelectItem>
                      <SelectItem value="en">Programming</SelectItem>
                      <SelectItem value="edu">Education</SelectItem>
                      <SelectItem value="enn">Programming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
  
                <div className=" space-y-2 " >
                <Label htmlFor="name">Date of Incorporation</Label>
                <Popover>
                  <PopoverTrigger asChild className="w-full">
                      <Button
                      variant={"outline"}
                      className={cn(
                          "w-full justify-between text-wrap font-normal",
                          !date && "text-muted-foreground"
                      )}
                      >
                      {date ? format(date, "PPP") : <span className="text-[#98A9BC]">Select date</span>}
                      <CalendarIcon />
                      </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      />
                  </PopoverContent>
               </Popover>
                </div>
  
              </div>
              </FormControl>
              <FormMessage  className="text-red-500 font-medium" />
            </FormItem>
          )}
        />
        
                <Button variant={"next"} 
                        type= "button" 
                        className="w-full p-4"
                        onClick={handleNext}
                >
                            {currentStep === 2  ? 'VERIFY ' : ' NEXT STEP'}
                </Button>

      </form>
    </Form>
  )
}
        
export default CorporateDetails;