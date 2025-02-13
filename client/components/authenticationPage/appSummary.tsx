import Image from "next/image"
import ticketIcon from "@/public/assets/authPage/ticket.png"
export default function AppSummary() {
  return (
    <div className="flex flex-col justify-start items-start w-1/2 h-screen">
      <div className="flex w-full justify-start items-start p-4">
        <Image src={ticketIcon} width={70} height={60} alt="ticketIcon" className=" mr-1" />
        <p className="font-logo text-[42px] text-[#FFE047]">Eventify</p>
      </div>

      <div className="flex items-center justify-center w-full h-1/2">
        <div className="text-[48px] text-white items-start flex flex-col font-bold font-monster">
          <p>Discover tailored <br /> events.</p>
          <p>
            Sign up for personalized <br /> recommendations <br /> today!
          </p>
        </div>
      </div>
    </div>
  )
}