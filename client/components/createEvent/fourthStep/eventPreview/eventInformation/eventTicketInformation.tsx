import { useSelector } from "react-redux";
import { IoTicket } from "react-icons/io5";

export default function EventTicketInformation() {

  const multiStepValues = useSelector((state: any) => state.rootReducer.multiFormSlice)
  console.log(multiStepValues)
  return (
    <div className="flex flex-col items-start justify-start text-[#2D2C3C] font-opensans">
      <p className="text-[36px] font-bold">Ticket Information</p>

      <div className="flex items-center justify-start gap-3">
        <IoTicket className="text-[30px] font-semibold" />
        <p className="font-semibold text-[24px] capitalize">Ticket Type: {multiStepValues.eventType} </p>
        {multiStepValues.eventType !== "free" && <p> / {multiStepValues.ticketQuantity} x <span className="text-[20px]">{multiStepValues.ticketPrice} EUR</span ></p>}
      </div>
    </div>
  )
}