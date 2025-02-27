import { SearchParams } from "next/dist/server/request/search-params"
import SingleEvent from "@/components/singleEvent/singleEvent"
import { cookies } from "next/headers"

interface EventTicket {
  createdAt: string,
  eventId: string,
  id: string,
  ticketPrice: number,
  ticketQuantity: number,
  title: string,
  updatedAt: string
}

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
  createdAt: Date,
  updatedAt: Date,
  ticket: EventTicket

}

interface ErrorType {
  message: string
}

interface responseData {
  event: FetchedEvent,
  isInterested: boolean
}

interface ComponentProps {
  params: Promise<SearchParams>
}

export default async function Page({ params }: ComponentProps) {

  const { eventId } = await params
  const cookie = cookies()

  try {
    const response = await fetch(`http://localhost:8080/getEvent/${eventId}`, {
      headers: { Cookie: (await cookie).toString() }
    })

    if (!response.ok) {
      const resData = await response.json()
      const error: ErrorType = new Error(resData.message)
      throw error
    }

    const resData: responseData = await response.json()

    console.log(resData)

    return (
      <div>
        <SingleEvent event={resData.event} interested={resData.isInterested} />
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