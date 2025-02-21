import CardLeft from "./cardLeft/cardLeft"
import CardRight from "./cardRight/cardRight"

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

export default function SearchedEventCard({ event }: ComponentProps) {
  return (
    <div className="flex justify-start items-start gap-2 p-3">
      <CardLeft event={event} />
      <CardRight event={event} />
    </div>
  )
}