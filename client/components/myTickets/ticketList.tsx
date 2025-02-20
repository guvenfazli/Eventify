"use client"
import { useState, useEffect } from "react"
import Ticket from "./ticket"
interface ErrorType {
  message: string
}


export default function TicketList() {

  const [ticketList, setTicketList] = useState([])

  useEffect(() => {
    async function fetchMyTickets() {
      try {
        const response = await fetch('http://localhost:8080/myTickets', {
          credentials: "include"
        })

        if (!response.ok) {
          const resData = await response.json()
          const error = new Error(resData.message)
          throw error
        }

        const resData = await response.json()
        setTicketList(resData.tickets)
      } catch (err: unknown) {
        const error = err as ErrorType
        console.log(error.message)
      }
    }

    fetchMyTickets()

  }, [])




  return (
    <div className="grid grid-cols-3 gap-y-5 gap-5 px-20 w-full   ">
      {ticketList.map((ticket: any) => <Ticket key={ticket.id} ticket={ticket} />)}
    </div>

  )
}