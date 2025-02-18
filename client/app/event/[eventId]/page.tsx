import { SearchParams } from "next/dist/server/request/search-params"
import SingleEvent from "@/components/singleEvent/singleEvent"
interface FetchedEvent {
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

interface ErrorType {
  message: string
}

interface responseData {
  event: FetchedEvent
}

interface ComponentProps {
  params: Promise<SearchParams>
}

export default async function Page({ params }: ComponentProps) {

  const { eventId } = await params

  try {
    const response = await fetch(`http://localhost:8080/getEvent/${eventId}`, {
      credentials: 'include'
    })

    if (!response.ok) {
      const resData = await response.json()
      const error: ErrorType = new Error(resData.message)
      throw error
    }

    const resData: responseData = await response.json()

    return (
      <div>
        <SingleEvent event={resData.event} />
      </div>
    )

  } catch (err: unknown) {
    const error = err as ErrorType
    return (
      <div>
        <p>{error.message}</p>
      </div>
    )
  }
}