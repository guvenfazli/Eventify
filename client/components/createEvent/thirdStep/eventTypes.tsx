import TicketOrFreeEvents from "./eventTypes/ticketOrFreeEvents";

export default function EventTypes() {
  return (
    <div className="flex justify-start items-start gap-12 w-full mb-10">
      <TicketOrFreeEvents eventType="paid" />
      <TicketOrFreeEvents eventType="free" />
    </div>
  )
}