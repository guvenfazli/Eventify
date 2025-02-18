import { CiLocationOn } from "react-icons/ci";
import { IoTicket } from "react-icons/io5";

interface ComponentProps {
  location: string,
  eventType: string,
  ticketQuantity: number,
  ticketPrice: number
}

export default function LocationTicketInformation({ location, eventType, ticketQuantity, ticketPrice }: ComponentProps) {
  return (
    <div className="flex justify-between items-start w-full">
      <div className="flex flex-col items-start justify-start text-[#2D2C3C] font-opensans">
        <p className="text-[36px] font-bold">Location</p>

        <div className="flex items-center justify-start gap-3">
          <CiLocationOn className="text-[30px] font-semibold" />
          <p className="font-semibold text-[24px]">{location}</p>
        </div>

      </div>

      <div className="flex flex-col items-start justify-start text-[#2D2C3C] font-opensans">
        <p className="text-[36px] font-bold">Ticket Information</p>

        <div className="flex items-center justify-start gap-3">
          <IoTicket className="text-[30px]" />
          <p className="font-semibold text-[24px] capitalize">Ticket Type: {eventType}</p>
          {eventType !== "free" && <p>/ {ticketQuantity.toLocaleString()} x <span className="text-[20px]">{ticketPrice} EUR</span></p>}
        </div>
      </div>
    </div>
  )
}