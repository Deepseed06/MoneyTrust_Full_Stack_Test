import LogoImg from "@/assets/comx.png"
const Logo = () => {
  return (
    <div className=" flex items-center justify-center">
        <img src={LogoImg} alt="header-logo" className="w-[96px] sm:w-[120px]" />
    </div>
  )
}

export default Logo