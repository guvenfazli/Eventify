import EventDate from "./eventDate"
import EventInformation from "./eventInformation"
export default function EventCardBottom() {
  return (
    <div className="flex w-full justify-start items-start px-3 gap-5">
      <EventDate />
      <EventInformation />
    </div>
  )
}