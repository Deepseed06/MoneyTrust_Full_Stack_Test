import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useNavigate } from "react-router-dom"

const Welcome = () => {
    const navigate = useNavigate();
  return (
    <div className="w-[450px] space-y-20">
    <Card className="max-w-[900px] sm:min-w-96 px-4 my-6 relative  md:min-h[470px]">
      <CardHeader>
            <div className="text-center mb-2">
                <h1 className="text-xl sm:text-2xl ">Sign In to ComX</h1>
                <span className="text-xs sm:text-sm">Welcome to comX</span>
            </div>

      </CardHeader>
      <CardContent >
         <Button type="button" 
         variant={"secondary"} 
         size={"lg"}
         onClick={() => navigate('/auth/sign-in')}
         >
            Sign In
         </Button>
      </CardContent>
      
    </Card>
    <Card className="max-w-[900px] sm:min-w-96 px-4 my-6 relative  md:min-h[470px]">
      <CardHeader>
            <div className="text-center mb-2">
                <h1 className="text-xl sm:text-2xl ">Create an Account</h1>
                <span className="text-xs sm:text-sm">Join the Family</span>
            </div>

      </CardHeader>
      <CardContent >
         <Button type="button" variant={"default"} size={"lg"}>Register</Button>
      </CardContent>
      
    </Card>
    </div>
  )
}

export default Welcome