import { IoTicketOutline } from "react-icons/io5";
import { MdMoneyOffCsred } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice";

interface ComponentProps {
  eventType: string
}

export default function TicketOrFreeEvents({ eventType }: ComponentProps) {

  const dispatch = useDispatch()
  const multiStepValues = useSelector((state: any) => state.rootReducer.multiFormSlice)

  function chooseEvent(type: string) {
    dispatch(multiStepFormAction.fillTheForm({ ['eventType']: type }))
  }

  if (eventType === "paid") {
    return (
      <div onClick={() => chooseEvent('paid')} className={`flex flex-col justify-center items-center gap-2 w-1/3 border py-5 rounded-lg border-[#828282] hover:cursor-pointer hover:bg-[#F6FBFF]/80 ${multiStepValues.eventType === "paid" && "bg-[#F6FBFF] border-2 border-black"} `}>
        <IoTicketOutline className="text-8xl text-[#2B293D]" />
        <p className="text-[22px] font-opensans font-semibold text-[#2B293D]">Ticketed Event</p>
        <p className="font-opensans text-[20px] text-[#2B293D]">This event requires tickets for entry.</p>
      </div>
    )
  } else {
    return (
      <div onClick={() => chooseEvent('free')} className={`flex flex-col justify-center items-center gap-2 w-1/3 border py-5 rounded-lg border-[#828282] hover:cursor-pointer hover:bg-[#F6FBFF]/80 ${multiStepValues.eventType === "free" && "bg-[#F6FBFF] border-2 border-black"} `}>
        <MdMoneyOffCsred className="text-8xl text-[#2B293D]" />
        <p className="text-[22px] font-opensans font-semibold text-[#2B293D]">Free Event</p>
        <p className="font-opensans text-[20px] text-[#2B293D]">This event runs free.</p>
      </div>
    )
  }


}