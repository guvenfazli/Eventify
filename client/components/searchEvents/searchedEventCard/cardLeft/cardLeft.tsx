import TagCard from "@/components/homePage/eventCard/eventCardTop/tagCard"
import HalfImageShowcase from "./halfImageShowcase"
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

export default function CardLeft({ event }: ComponentProps) {

  const formattedImgUrl = event.imageURL.replaceAll(/\\/g, '/')

  return (
    <div className={`flex w-1/3 rounded-tl-lg rounded-tr-lg rounded-br-lg min-h-[208px] relative bg-[url(http://localhost:8080/${formattedImgUrl})] bg-center bg-cover`}>
      <HalfImageShowcase imgURL={formattedImgUrl} />
      <TagCard eventTag={event.category} />
    </div>
  )
}