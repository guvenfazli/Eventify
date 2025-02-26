"use client"

import { useState, useEffect } from "react"
import UpcomingEvents from "./eventsSection/upcomingEvents"
import ClientErrorComp from "@/components/clientErrorComp/clientErrorComp"
import Loading from "@/app/createEvent/loading"
import EventsSection from "./eventsSection/eventsSection"

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

export default function PopularEvents() {

  const [upcomingList, setUpcomingList] = useState<event[]>([])
  const [isError, setIsError] = useState<boolean | string>(false)
  const [isMaxedEvents, setIsMaxedEvents] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [days, setDays] = useState<{ start: number, end: number }>({
    start: 0,
    end: 1
  })
  const [page, setPage] = useState<number>(6)

  useEffect(() => {
    async function fetchUpcomingEvents() {

      try {
        setIsLoading(true)
        setIsError(false)
        const response = await fetch(`http://localhost:8080/upcomingEvents?page=${page}&start=${days.start}&end=${days.end}`, {
          credentials: "include"
        })

        if (!response.ok) {
          const resData = await response.json()
          const error = new Error(resData.message)
          throw error
        }

        const resData = await response.json()

        setIsLoading(false)
        setUpcomingList(resData.upcomingList)
        setIsMaxedEvents(resData.isLimit)
      } catch (err: unknown) {
        const error = err as ErrorType
        setIsLoading(false)
        setUpcomingList([])
        setIsError(error.message)
      }
    }

    fetchUpcomingEvents()

  }, [days, page, setDays, setPage])



  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col justify-start gap-5 items-start">
        <p className="text-[40px] font-bold font-monster text-[#2D2C3C]">Upcoming Events</p>
        <div className="flex justify-start space-x-10 items-center text-[#6F6F6F]">
          <button onClick={() => setDays({ start: 0, end: 0 })}
            className={`text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out ${(days.start === 0 && days.end === 1) && 'bg-[#FFE047] text-[#2D2C3C]'}`}>
            Today
          </button>
          <button onClick={() => setDays({ start: 1, end: 0 })}
            className={`text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out ${(days.start === 1 && days.end === 0) && 'bg-[#FFE047] text-[#2D2C3C]'}`}>Tomorrow</button>
          <button onClick={() => setDays({ start: 0, end: 7 })}
            className={`text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out ${(days.start === 0 && days.end === 7) && 'bg-[#FFE047] text-[#2D2C3C]'}`}>This Week</button>
        </div>
      </div>

      <div className="flex flex-col justify-start gap-5 items-start w-full">
        {isError && <ClientErrorComp errorMessage={isError} />}
        {isLoading && <Loading />}
        <EventsSection eventList={upcomingList} />
        <div className="flex w-full justify-center items-center">
          <button disabled={isMaxedEvents}
            className="w-1/3 py-3 rounded-md text-[#2B293D] border-2 border-[#2B293D] font-opensans font-semibold text-[24px] hover:bg-[#2B293D] hover:text-white duration-150 ease-in-out disabled:pointer-events-none disabled:text-[#2B293D]/50 disabled:border-[#2B293D]/30">
            See More
          </button>
        </div>
      </div>
    </div>
  )
}