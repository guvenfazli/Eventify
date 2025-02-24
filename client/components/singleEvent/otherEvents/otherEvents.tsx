"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import EventCard from "@/components/homePage/eventCard/eventCard"
import Loading from "@/app/homePage/loading"
import ClientErrorComp from "@/components/clientErrorComp/clientErrorComp"
import { useEffect, useState } from "react"

interface ErrorType {
  message: string
}

interface Event {
  id: string,
  title: string,
  category: string,
  interested: number,
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
}

interface ComponentProps {
  event: Event
}

export default function OtherEvents({ event }: ComponentProps) {

  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean | string>(false)
  const [similarEvents, setSimilarEvents] = useState<Event[]>([])

  useEffect(() => {
    async function fetchSimilarEvents() {
      try {
        setIsLoading(true)
        const response = await fetch(`http://localhost:8080/similarEvents?location=${event.location}&category=${event.category}&id=${event.id}`, {
          credentials: "include"
        })

        if (!response.ok) {
          const resData = await response.json()
          const error = new Error(resData.message)
          throw error
        }

        const resData = await response.json()
        setSimilarEvents(resData.similarEvents)
        setIsLoading(false)
      } catch (err: unknown) {
        const error = err as ErrorType
        setIsError(error.message)
        setIsLoading(false)
      }
    }

    fetchSimilarEvents()

  }, [])



  return (
    <div className="flex flex-col justify-start items-start w-full">
      <p className="text-[36px] text-[#2D2C3C] font-bold font-opensans">Other Events You May Like</p>

      {isLoading && <Loading />}

      {isError ? <ClientErrorComp errorMessage={isError} /> :
        <Carousel className="w-full">
          <CarouselContent>
            {similarEvents.map((event: Event) =>
              <CarouselItem className="basis-1/3" key={event.id}>
                <EventCard event={event} />
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      }
    </div>
  )
}