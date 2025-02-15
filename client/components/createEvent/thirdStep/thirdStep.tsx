import FormSection from "../formSection"
import EventTypes from "./eventTypes"
import TicketsSelling from "./ticketsSelling/ticketsSelling"
export default function ThirdStep() {
  return (
    <div className="flex flex-col items-start justify-start gap-2 ">
      <FormSection formSection="What Type of Event are You Running?" />
      <EventTypes />
      <FormSection formSection="How Many Tickets Will be Sold?" />
      <TicketsSelling />
    </div>
  )
}