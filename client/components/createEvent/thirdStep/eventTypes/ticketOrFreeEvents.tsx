import { IoTicketOutline } from "react-icons/io5";
import { MdMoneyOffCsred } from "react-icons/md";

interface ComponentProps {
  eventType: string
}
export default function TicketOrFreeEvents({ eventType }: ComponentProps) {

  if (eventType === "paid") {
    return (
      <div className="flex flex-col justify-center items-center gap-2 w-1/3 border py-5 rounded-lg border-[#828282] duration-150 ease-in-out hover:cursor-pointer hover:bg-[#F6FBFF]/80">
        <IoTicketOutline className="text-8xl text-[#2B293D]" />
        <p className="text-[22px] font-opensans font-semibold text-[#2B293D]">Ticketed Event</p>
        <p className="font-opensans text-[20px] text-[#2B293D]">This event requires tickets for entry.</p>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col justify-center items-center gap-2 w-1/3 border py-5 rounded-lg border-[#828282] duration-150 ease-in-out hover:cursor-pointer hover:bg-[#F6FBFF]/80">
        <MdMoneyOffCsred className="text-8xl text-[#2B293D]" />
        <p className="text-[22px] font-opensans font-semibold text-[#2B293D]">Free Event</p>
        <p className="font-opensans text-[20px] text-[#2B293D]">This event runs free.</p>
      </div>
    )
  }


}