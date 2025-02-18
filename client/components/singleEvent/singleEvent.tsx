import PageRotator from "./pageRotator/pageRotator"
import ImageTitleFavorite from "./imageTitleFavorite/imageTitleFavorite"
import DateTimeBuyTickets from "./dateTimeBuyTickets/dateTimeBuyTickets"
import LocationTicketInformation from "./locationTicketInformation/locationTicketInformation"
import Category from "./category/category"
import Description from "./description/description"
import OtherEvents from "./otherEvents/otherEvents"

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
  createdAt: Date,
  updatedAt: Date
}

interface ComponentProps {
  event: Event
}

export default function SingleEvent({ event }: ComponentProps) {
  return (
    <div className="flex justify-start items-start w-full p-12">
      <PageRotator />
      <div className="flex flex-col justify-start items-start w-full px-12 gap-12">
        <ImageTitleFavorite imageURL={event.imageURL} title={event.title} eventId={event.id} />
        <DateTimeBuyTickets startDate={event.startDate} startTime={event.startTime} endDate={event.endDate} endTime={event.endTime} />
        <LocationTicketInformation location={event.location} ticketPrice={event.ticketPrice} ticketQuantity={event.ticketQuantity} eventType={event.eventType} />
        <Category eventCategory={event.category} />
        <Description description={event.description} />
        <OtherEvents event={event} />
      </div>
    </div>
  )
}