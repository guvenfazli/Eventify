import EventCardTop from "./eventCardTop/eventCardTop"
import EventCardBottom from "./eventCardBottom/eventCardBottom"

interface event {
  id: string,
  title: string,
  category: string,
  startDate: number,
  endDate: number,
  startTime: string,
  endTime: string,
  location: string,
  description: string,
  eventType: string,
  ticketQuantity: number,
  ticketPrice: number,
  imageURL: string,
  createdAt: Date,
  updatedAt: Date
}

interface ComponentProps {
  event: event

}


export default function EventCard({ event }: ComponentProps) {
  return (
    <div className="flex flex-col items-start justify-start p-3 gap-3">
      <EventCardTop event={event} />
      <EventCardBottom event={event} />
    </div>
  )
}