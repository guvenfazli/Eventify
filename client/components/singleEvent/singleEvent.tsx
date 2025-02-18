import ImageTitleFavorite from "./imageTitleFavorite/imageTitleFavorite"
interface Event {
  id: string,
  title: string,
  category: string,
  interested: number,
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
  createdAt: string,
  updatedAt: string
}

interface ComponentProps {
  event: Event
}

export default function SingleEvent({ event }: ComponentProps) {
  return (
    <div className="flex flex-col justify-start items-start w-full p-12 gap-12">
      <ImageTitleFavorite imageURL={event.imageURL} title={event.title} />
    </div>
  )
}