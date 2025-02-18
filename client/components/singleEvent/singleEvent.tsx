import ImageTitleFavorite from "./imageTitleFavorite/imageTitleFavorite"
import DateTimeBuyTickets from "./dateTimeBuyTickets/dateTimeBuyTickets"
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
    <div className="flex justify-start items-start w-full px-12">
      <div className="flex flex-col justify-start items-start w-full p-12 gap-12">
        <ImageTitleFavorite imageURL={event.imageURL} title={event.title} />
        <DateTimeBuyTickets startDate={event.startDate} startTime={event.startTime} endDate={event.endDate} endTime={event.endTime} />
      </div>
    </div>
  )
}