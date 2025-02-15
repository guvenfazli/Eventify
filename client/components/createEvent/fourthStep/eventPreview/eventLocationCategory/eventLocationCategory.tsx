import EventTicketInformation from "../eventInformation/eventTicketInformation"
import EventCategory from "./eventCategory"
export default function EventLocationCategory() {
  return (
    <div className="flex flex-col items-end justify-start w-full text-[#2D2C3C]">
      <div className="flex flex-col justify-between h-full">
        <EventTicketInformation />
        <EventCategory />
      </div>
    </div>
  )
}