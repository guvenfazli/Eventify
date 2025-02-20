"use client"
import { useEffect, useState } from "react"
import EventCard from "../homePage/eventCard/eventCard"

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
  interestedEvents: event[]
}

interface ErrorType {
  message: string
}

export default function InterestedEventsSection({ interestedEvents }: ComponentProps) {

  const [filterType, setFilterType] = useState<{ filter: string, direction: string }>({ filter: 'title', direction: 'ASC' })
  const [interestedEventsList, setInterestedEventsList] = useState<event[]>(interestedEvents || [])

  useEffect(() => {

    async function filterInterestedEvents() {
      try {
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
      } catch (err: unknown) {
        const error = err as ErrorType
        console.log(error.message)
      }
    }

    filterInterestedEvents()

  }, [filterType, setFilterType])


  function filterInterestedEvents(filter: string, direction: string) {
    setFilterType((prev) => {
      if (prev.filter === filter) {
        return prev
      }
      const newFilter = { filter, direction }
      return newFilter
    })
  }

  console.log(filterType)



  return (
    <div className="flex flex-col w-full justify-start items-start gap-5">
      <div className="flex justify-start items-center gap-5">
        <button onClick={() => filterInterestedEvents('title', 'ASC')}>Title</button>
        <button onClick={() => filterInterestedEvents('startDate', 'DESC')}>Soon</button>
        <button onClick={() => filterInterestedEvents('interested', 'DESC')}>Interested</button>
        <button onClick={() => filterInterestedEvents('ticketPrice', 'ASC')}>Price</button>
      </div>

      <div className="grid grid-cols-3 gap-y-5 w-full">
        {interestedEventsList.map((event: event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  )
}