"use client"

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

export default function OtherEvents({ event }: ComponentProps) {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean | string>(false)
  const [similarEvents, setSimilarEvents] = useState<Event[]>([])
  console.log(event)
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
      }
    }

    fetchSimilarEvents()

  }, [])

  console.log(similarEvents)

  return (
    <div className="flex flex-col justify-start items-start w-full">
      <p className="text-[36px] text-[#2D2C3C] font-bold font-opensans">Other Events You May Like</p>
    </div>
  )
}