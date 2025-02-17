import { useSelector } from "react-redux"
import FormSection from "../formSection"
import EventTypes from "./eventTypes"
import TicketsSelling from "./ticketsSelling/ticketsSelling"



export default function ThirdStep() {

  const eventType = useSelector((state: any) => state.rootReducer.multiFormSlice.eventType)

  return (
    <div className="flex flex-col items-start justify-start gap-2 ">
      <FormSection formSection="What Type of Event are You Running?" />
      <EventTypes />

      {eventType === "paid" &&
        <>
          <FormSection formSection="How Many Tickets Will be Sold?" />
          <TicketsSelling />
        </>
      }
    </div>
  )
}