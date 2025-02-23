import messageImg from "@/assets/message.png"
const CustomerServiceBtn = () => {
  return (
    <div className="fixed flex items-center p-2 justify-center cursor-pointer bottom-32 sm:bottom-8 right-8 bg-[#D71E0E] rounded-full w-10 h-10 sm:w-12 sm:h-12">
    <img src={messageImg}  alt="message"  />
  </div>
  )
}

export default CustomerServiceBtn