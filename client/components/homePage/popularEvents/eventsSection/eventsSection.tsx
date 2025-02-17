import EventCard from "../../eventCard/eventCard"

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
  trendingList: event[]

}

export default function EventsSection({ trendingList }: ComponentProps) {

  return (
    <div className="grid grid-cols-3 gap-y-5  w-full">
      {trendingList.map((event: event) => <EventCard key={event.id} event={event} />)}
    </div>
  )
}