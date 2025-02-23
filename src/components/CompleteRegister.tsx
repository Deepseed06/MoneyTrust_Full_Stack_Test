import successImage from "@/assets/success.png"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

const CompleteRegister = () => {
  const navigate = useNavigate()
  const handleNext = () => {  
    navigate("/dashboard")
  }
  return (
    <div>
      <div className=" text-center text-sm flex flex-col justify-center items-center">
                    <img src={successImage} width={200} height={200} alt="success" className="mb-4"/>
                    <h1 className="text-xl sm:text-2xl mb-4">Registeration Complete</h1>
                    {/* ADD FIRST NAME USING API */}
                    <span className="">Dear [fName]. Your registration is now complete.
                    You  may proceed to your dashboard and start trading commodities.</span>
                </div>
                <Button variant={"next"} 
                type="button"
                onClick={handleNext}
                className="w-full p-4"
                >
                    GO TO DASHBOARD
                   
                </Button>
    </div>
  )
}

export default CompleteRegister