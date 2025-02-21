"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
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
  srch: string | undefined,
  location: string | undefined,
  price: string | undefined,
  date: number | undefined,
  category: string | undefined
}

interface ErrorType {
  message: string
}

export default function SearchResults() {

  const searchParams = useSearchParams()
  const srch = searchParams.get('srch')
  const location = searchParams.get('location')
  const [eventList, setEventList] = useState<event[]>([])
  const [filterSettings, setFilterSettings] = useState<FilterSettings>({
    srch: srch ? srch : undefined,
    location: location ? location : undefined,
    price: undefined,
    date: undefined,
    category: undefined
  })

  useEffect(() => {
    async function searchFilteredEvents() {
      try {
        const response = await fetch(`http://localhost:8080/searchEvents?srch=${filterSettings.srch}&location=${filterSettings.location}&eventType=${filterSettings.price}&startDate=${filterSettings.date}&category=${filterSettings.category}`)

        if (!response.ok) {
          const resData = await response.json()
          const error = new Error(resData.message)
          throw error
        }

        const resData = await response.json()

        setEventList(resData.filteredEvents)
      } catch (err: unknown) {
        const error = err as ErrorType
        console.log(error.message)
      }
    }
  }, [])

  return (
    <div className="flex justify-start items-start w-full p-3 gap-16">
      <NavBar />
      <div className="grid grid-cols-2 gap-y-5 w-full">
        <SearchedEventCard />
        <SearchedEventCard />
        <SearchedEventCard />
        <SearchedEventCard />
        <SearchedEventCard />
      </div>
    </div>
  )
}