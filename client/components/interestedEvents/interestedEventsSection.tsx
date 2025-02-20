"use client"
import { useEffect, useState } from "react"
import EventCard from "../homePage/eventCard/eventCard"
import Loading from "@/app/createEvent/loading"
import ClientErrorComp from "../clientErrorComp/clientErrorComp"

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

export default function InterestedEventsSection() {

  const [filterType, setFilterType] = useState<{ filter: string, direction: string }>({ filter: 'title', direction: 'ASC' })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean | string>(false)
  const [interestedEventsList, setInterestedEventsList] = useState<event[]>([])

  useEffect(() => {

    async function filterInterestedEvents() {

      try {
        setIsError(false)
        setIsLoading(true)

        const response = await fetch(`http://localhost:8080/interestedEvents?filter=${filterType.filter}&direction=${filterType.direction}`, {
          credentials: "include"
        })

        if (!response.ok) {
          const resData = await response.json()
          const error = new Error(resData.message)
          throw error
        }

        const resData = await response.json()

        setInterestedEventsList(resData.interestedEvents)
        setIsLoading(false)
      } catch (err: unknown) {
        const error = err as ErrorType
        setIsError(error.message)
        setIsLoading(false)
      }

    }

    filterInterestedEvents()

  }, [filterType, setFilterType])


  function filterInterestedEvents(filter: string, direction: string) {
    setFilterType((prev) => {
      if (prev.filter === filter) {
        if (prev.direction === 'DESC') {
          const updatedFilter = { ...prev }
          updatedFilter.direction = 'ASC'
          return updatedFilter
        } else {
          const updatedFilter = { ...prev }
          updatedFilter.direction = 'DESC'
          return updatedFilter
        }
      }
      
      const newFilter = { filter, direction }
      return newFilter
    })
  }

  return (
    <div className="flex flex-col w-full justify-start items-start gap-5">
      <div className="flex justify-start items-center gap-5">
        <button className={`text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out ${filterType.filter === 'title' && 'bg-[#FFE047] text-[#2D2C3C]'}`} onClick={() => filterInterestedEvents('title', 'ASC')}>Title</button>
        <button className={`text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out ${filterType.filter === 'startDate' && 'bg-[#FFE047] text-[#2D2C3C]'}`} onClick={() => filterInterestedEvents('startDate', 'ASC')}>Soon</button>
        <button className={`text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out ${filterType.filter === 'interested' && 'bg-[#FFE047] text-[#2D2C3C]'}`} onClick={() => filterInterestedEvents('interested', 'DESC')}>Interested</button>
        <button className={`text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out ${filterType.filter === 'ticketPrice' && 'bg-[#FFE047] text-[#2D2C3C]'}`} onClick={() => filterInterestedEvents('ticketPrice', 'ASC')}>Price</button>
      </div>

      <div className="grid grid-cols-3 gap-y-5 w-full">
        {isLoading && <Loading />}
        {isError && <ClientErrorComp errorMessage={isError} />}
        {interestedEventsList.map((event: event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  )
}