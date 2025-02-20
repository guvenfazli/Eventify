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

  const [filterType, setFilterType] = useState<{ filter: string, direction: string }>({ filter: 'title', direction: 'DESC' })
  const [interestedEventsList, setInterestedEventsList] = useState<event[]>(interestedEvents || [])

  useEffect(() => {

    async function filterInterestedEvents() {
      try {
        const response = await fetch(`http://localhost:8080/interestedEvents?filter=${filterType.filter}&direction=${filterType.direction}`)




      } catch (err: unknown) {
        const error = err as ErrorType
      }
    }

  }, [filterType, setFilterType])


  function filterInterestedEvents(filter: string, direction: string) {
    setFilterType({ filter, direction })
  }

  console.log(filterType)



  return (
    <div className="flex flex-col w-full justify-start items-start gap-5">
      <div className="flex justify-start items-center gap-5">
        <button onClick={() => filterInterestedEvents('title', 'DESC')}>Title</button>
        <button onClick={() => filterInterestedEvents('startDate', 'DESC')}>Soon</button>
        <button onClick={() => filterInterestedEvents('interested', 'DESC')}>Interested</button>
        <button onClick={() => filterInterestedEvents('ticketPrice', 'DESC')}>Price</button>
      </div>

      <div className="grid grid-cols-3 gap-y-5 w-full">
        {interestedEventsList.map((event: event) => <EventCard key={event.id} event={event} />)}
      </div>
    </div>
  )
}