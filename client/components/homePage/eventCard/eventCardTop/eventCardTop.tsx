import Image from "next/image"
import TagCard from "./tagCard"
import ImageShowcase from "./imgShowcase"
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
  updatedAt: Date
}

interface ComponentProps {
  event: event
}

export default function EventCardTop({ event }: ComponentProps) {
  
  const formattedURL = event.imageURL.replaceAll(/\\/g, '/')
  
  return (
    <div className="flex w-full rounded-tl-lg rounded-tr-lg min-h-[254px] relative ">
      <ImageShowcase imgURL={event.imageURL.replaceAll(/\\/g, '/')} />
      <TagCard eventTag={event.category}  />
    </div>
  )
}