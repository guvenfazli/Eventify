import EventCard from "../../eventCard/eventCard"
export default function EventsSection() {
  return (
    <div className="grid grid-cols-3 gap-y-5 w-full">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  )
}