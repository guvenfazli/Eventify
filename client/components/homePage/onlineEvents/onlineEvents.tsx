"use client"
import { useState, useEffect } from "react"
import EventsSection from "../popularEvents/eventsSection/eventsSection"
import ClientErrorComp from "@/components/clientErrorComp/clientErrorComp"
import Loading from "@/app/createEvent/loading"

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

interface ErrorType {
  message: string
}

export default function OnlineEvents() {

  const [freeEventList, setFreeEventList] = useState<event[]>([])
  const [isError, setIsError] = useState<boolean | string>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [page, setPage] = useState<number>(6)

  useEffect(() => {
    async function fetchUpcomingEvents() {

      try {
        setIsLoading(true)
        setIsError(false)
        const response = await fetch(`http://localhost:8080/bestFreeEvents?page=${page}`, {
          credentials: "include"
        })

        if (!response.ok) {
          const resData = await response.json()
          const error = new Error(resData.message)
          throw error
        }

        const resData = await response.json()

        setIsLoading(false)
        setFreeEventList(resData.freeList)
      } catch (err: unknown) {
        const error = err as ErrorType
        setIsLoading(false)
        setFreeEventList([])
        setIsError(error.message)
      }
    }

    fetchUpcomingEvents()

  }, [page, setPage])


  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col justify-start gap-5 items-start">
        <p className="text-[40px] font-bold font-monster text-[#2D2C3C]">Discover Best of Free Events</p>
      </div>

      <div className="flex flex-col justify-start gap-5 items-start w-full">
        {isError && <ClientErrorComp errorMessage={isError} />}
        {isLoading && <Loading />}
        <EventsSection eventList={freeEventList} />
        <div className="flex w-full justify-center items-center">
          <button disabled={isLoading}
            className="w-1/3 py-3 rounded-md text-[#2B293D] border-2 border-[#2B293D] font-opensans font-semibold text-[24px] hover:bg-[#2B293D] hover:text-white duration-150 ease-in-out">
            See More
          </button>
        </div>
      </div>
    </div>
  )
}