import EventDate from "./eventDate"
import EventInformation from "./eventInformation"

interface event {
  id: string,
  title: string,
  category: string,
  startDate: number,
  endDate: number,
  location: string,
  description: string,
  eventType: string,
  ticketQuantity: number,
  ticketPrice: number,
  imageURL: string,
  createdAt: Date,
  updatedAt: Date,
  interested: number
}

interface ComponentProps {
  event: event
}



export default function EventCardBottom({ event }: ComponentProps) {
  return (
    <div className="flex w-full justify-start items-start px-3 gap-5">
      <EventDate endDate={event.endDate} startDate={event.startDate} />
      <EventInformation event={event} />
    </div>
  )
}