import EventCardTop from "./eventCardTop/eventCardTop"
import EventCardBottom from "./eventCardBottom/eventCardBottom"
export default function EventCard() {
  return (
    <div className="flex flex-col items-start justify-start p-3 gap-3">
      <EventCardTop />
      <EventCardBottom />
    </div>
  )
}