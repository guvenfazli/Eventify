import TagCard from "./tagCard"

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

export default function EventCardTop({ event }: ComponentProps) {
  return (
    <div className="flex w-full rounded-tl-lg rounded-tr-lg min-h-[254px] relative bg-[url('/assets/homePage/eventPicture.jpeg')] bg-bottom bg-cover">
      <TagCard eventTag={event.category}  />
    </div>
  )
}