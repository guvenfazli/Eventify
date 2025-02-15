import EventDateTime from "./eventDateTime"
import EventLocation from "../eventLocationCategory/eventLocation"

export default function EventInformation() {
  return (
    <div className="flex flex-col items-start justify-start w-full text-[#2D2C3C]">
      <EventDateTime />
      <EventLocation />
    </div>
  )
}