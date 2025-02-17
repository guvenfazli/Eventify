import EventStats from "./eventStats"

interface event {
  id: string,
  title: string,
  category: string,
  startDate: number,
  interested: number,
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


export default function EventInformation({ event }: ComponentProps) {
  
 
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="font-opensans font-semibold text-[24px] text-[#2D2C3C]">{event.title}</p>
      <p className="font-opensans font-semibold text-[18px] text-[#5A5A5A]">{event.location}</p>
      <p className="font-opensans text-[18px] text-[#5A5A5A]">{event.startTime} - {event.endTime}</p>

      <EventStats eventType={event.eventType} ticketPrice={event.ticketPrice} ticketQuantity={event.ticketQuantity} interested={event.interested} />
    </div>
  )
}