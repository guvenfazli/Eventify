import Image from "next/image"
import ticketIcon from "../../../assets/authPage/ticket.png"

export default function HeaderLeft() {
  return (
    <div className="flex">
      <Image src={ticketIcon} width={65} height={45} alt="ticketIcon" className=" mr-1" />
      <p className="font-logo text-[48px] text-[#FFE047]">Eventify</p>
    </div>
  )
}