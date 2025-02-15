import EventLocation from "./eventLocation"
import EventCategory from "./eventCategory"
export default function EventLocationCategory() {
  return (
    <div className="flex items-start justify-between w-full text-[#2D2C3C]">
      <EventLocation />
      <EventCategory />
    </div>
  )
}