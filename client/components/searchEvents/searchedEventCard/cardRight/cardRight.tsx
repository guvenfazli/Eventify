import { IoTicket } from "react-icons/io5";
import dayjs from "dayjs";
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

export default function CardRight({ event }: ComponentProps) {

  const start = dayjs.unix(event.startDate).format("MMM")
  const startDay = dayjs.unix(event.startDate).format("DD")
  const end = dayjs.unix(event.endDate).format("MMM")
  const endDay = dayjs.unix(event.endDate).format("DD")

  return (
    <div className="flex flex-col justify-around items-start h-full py-2">
      <p className="text-[24px] font-semibold text-[#2D2C3C] font-opensans">{event.title}</p>
      <p className="text-[20px] font-bold text-[#5A5A5A] font-opensans">{start + ' ' + startDay} - {end + ' ' + endDay} | {event.location}</p>
      <p className="text-[20px] text-[#5A5A5A] font-opensans">{dayjs.unix(event.startDate).format("HH:mm")} - {dayjs.unix(event.endDate).format("HH:mm")}</p>

      <div className="flex gap-1 items-center justify-start">
        <IoTicket className="text-[#287921] inline-block text-lg" />
        <p className="text-[20px] text-[#287921] font-opensans font-semibold">{event.ticketPrice} <span className="text-sm">eur</span></p>
      </div>

    </div>
  )
}