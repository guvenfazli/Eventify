import EventCardTop from "./eventCardTop/eventCardTop"
import EventCardBottom from "./eventCardBottom/eventCardBottom"
export default function EventCard() {
  return (
    <div className="flex flex-col items-start justify-start p-3 gap-5 border border-blue-500">
      <EventCardTop />
      <EventCardBottom />
    </div>
  )
}