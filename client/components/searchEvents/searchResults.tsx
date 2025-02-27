"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Loading from "@/app/createEvent/loading"
import ClientErrorComp from "../clientErrorComp/clientErrorComp"
import NavBar from "./navBar"
import SearchedEventCard from "./searchedEventCard/searchedEventCard"

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

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | undefined,
}

interface ErrorType {
  message: string
}

interface ComponenProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>
  filterSettings: FilterSettings
}

export default function SearchResults({ setFilterSettings, filterSettings }: ComponenProps) {

  const searchParams = useSearchParams()
  const srch = searchParams.get('srch')
  const location = searchParams.get('location')
  const category = searchParams.get('category')
  const [eventList, setEventList] = useState<event[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean | string>(false)


  useEffect(() => {
    async function searchFilteredEvents() {
      try {
        setIsError(false)
        setIsLoading(true)
        const response = await fetch(`http://localhost:8080/searchEvents?srch=${filterSettings.srch}&location=${filterSettings.location}&eventType=${filterSettings.eventType}&startDate=${filterSettings.startDate}&endDate=${filterSettings.endDate}&category=${filterSettings.category}`, {
          credentials: "include"
        })

        if (!response.ok) {
          const resData = await response.json()
          const error = new Error(resData.message)
          throw error
        }

        const resData = await response.json()

        setEventList(resData.filteredEvents)
        setIsLoading(false)
      } catch (err: unknown) {
        const error = err as ErrorType
        setIsError(error.message)
        setIsLoading(false)
      }
    }

    if (srch || location || category) {
      searchFilteredEvents()
    }

  }, [])



  return (
    <div className="flex justify-start items-start w-full p-3 gap-16">
      <NavBar setFilterSettings={setFilterSettings} filterSettings={filterSettings} setEventList={setEventList} setIsError={setIsError} setIsLoading={setIsLoading} />

      {isLoading && <Loading />}
      {isError && <ClientErrorComp errorMessage={isError} />}

      {(!srch && !location && eventList.length <= 0) &&
        <div className="flex w-full justify-center items-center min-h-[450px]">
          <p className="text-[24px] text-[#2D2C3C] font-bold">Please choose at least one filter option.</p>
        </div>
      }

      {(!isLoading && !isError && eventList.length > 0) &&
        <div className="grid grid-cols-2 gap-y-5 w-full">
          {eventList.map((event) => <SearchedEventCard key={event.id} event={event} />)}
        </div>
      }
    </div>
  )
}