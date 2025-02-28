import EventCard from "../../eventCard/eventCard"

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
  freeEventList: event[]
}

export default function BestFreeEvents({ freeEventList }: ComponentProps) {


  return (
    <div className="grid grid-cols-3 gap-y-5 w-full">
      {freeEventList.map((event: event) => <EventCard key={event.id} event={event} />)}
    </div>
  )
}