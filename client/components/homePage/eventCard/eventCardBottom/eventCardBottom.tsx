import EventDate from "./eventDate"
import EventInformation from "./eventInformation"
export default function EventCardBottom() {
  return (
    <div className="flex w-full justify-around items-start p-3 gap-5">
      <EventDate />

      <EventInformation />
    </div>
  )
}