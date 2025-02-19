"use client"

import { useState, useEffect } from "react"

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
  const [days, setDays] = useState<number>(7)
  const [page, setPage] = useState<number>(6)

  useEffect(() => {
    async function fetchUpcomingEvents() {

      try {
        const response = await fetch(`http://localhost:8080/upcomingEvents?page=${page}&days=${days}`, {
          credentials: "include"
        })

        if (!response.ok) {
          const resData = await response.json()
          const error = new Error(resData.message)
          throw error
        }

        const resData = await response.json()
        setUpcomingList(resData.upcomingList)


      } catch (err: unknown) {
        const error = err as ErrorType
        console.log(error.message)
      }
    }

    fetchUpcomingEvents()

  }, [days, page, setDays, setPage])



  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col justify-start gap-5 items-start">
        <p className="text-[40px] font-bold font-monster text-[#2D2C3C]">Upcoming Events</p>
        <div className="flex justify-start space-x-10 items-center text-[#6F6F6F]">
          <button onClick={() => setDays(0)}
            className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out">
            Today
          </button>
          <button onClick={() => setDays(1)}
            className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out">Tomorrow</button>
          <button onClick={() => setDays(7)}
            className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out">This Week</button>
        </div>
      </div>

      <div className="flex flex-col justify-start gap-5 items-start w-full">
        {/* <EventsSection /> */}
        <div className="flex w-full justify-center items-center">
          <button
            className="w-1/3 py-3 rounded-md text-[#2B293D] border-2 border-[#2B293D] font-opensans font-semibold text-[24px] hover:bg-[#2B293D] hover:text-white duration-150 ease-in-out">
            See More
          </button>
        </div>
      </div>
    </div>
  )
}