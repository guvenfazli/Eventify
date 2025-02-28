"use client"
import { useState, useEffect } from "react"
import ClientErrorComp from "../clientErrorComp/clientErrorComp"
import Loading from "@/app/homePage/loading"
import Ticket from "./ticket"
import { authCheck } from "@/utils/authCheck"
interface ErrorType {
  message: string
}


export default function TicketList() {
  authCheck()
  const [ticketList, setTicketList] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean | string>(false)

  useEffect(() => {
    async function fetchMyTickets() {
      try {
        setIsLoading(true)
        setIsError(false)
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
        setIsLoading(false)
      } catch (err: unknown) {
        const error = err as ErrorType
        setIsLoading(false)
        setIsError(error.message)
      }
    }
    fetchMyTickets()
  }, [])




  return (
    <div className="flex w-full justify-start items-start">
      {isError && <ClientErrorComp errorMessage={isError} />}
      {isLoading && <Loading />}

      {(!isError && !isLoading) &&
        <div className="grid grid-cols-3 gap-y-5 gap-5 px-20 w-full">
          {ticketList.map((ticket: any) => <Ticket key={ticket.id} ticket={ticket} />)}
        </div>
      }

    </div>
  )
}