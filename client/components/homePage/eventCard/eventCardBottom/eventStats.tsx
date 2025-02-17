import { IoTicket, IoStar } from "react-icons/io5";

interface ComponentProps {
  eventType: string,
  ticketQuantity: number,
  ticketPrice: number,
  interested: number
}


export default function EventStats({ eventType, ticketQuantity, ticketPrice, interested }: ComponentProps) {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="flex justify-start items-center gap-1">
        <IoTicket className="text-[#5A5A5A]" />
        {eventType === "free" ?
          <p className="font-semibold font-opensans text-[#5A5A5A]">Free</p> :
          <p className="font-semibold font-opensans text-[#5A5A5A]">{ticketPrice}</p>
        }
      </div>

      <div className="flex justify-start items-center gap-1">
        <IoStar className="text-[#4539B4]" />
        <p className="font-semibold font-opensans text-[#5A5A5A]">{interested} Interested</p>
      </div>
    </div>
  )
}