import EventDateTime from "./eventDateTime"
import EventTicketInformation from "./eventTicketInformation"
export default function EventInformation() {
  return (
    <div className="flex items-start justify-between w-full text-[#2D2C3C]">
      <EventDateTime />
      <EventTicketInformation />
    </div>
  )
}