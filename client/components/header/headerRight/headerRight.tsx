"use client"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from "next/link"
import { useRouter } from "next/navigation";
import { IoTicketOutline, IoStarOutline } from "react-icons/io5";

interface ErrorType {
  message: string
}


export default function HeaderRight() {

  const router = useRouter()

  async function logOut() {
    try {
      const response = await fetch('http://localhost:8080/auth/logOut', {
        method: "POST",
        credentials: "include"
      })

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData)
        throw error
      }

      const resData = await response.json()
      router.push('/')

    } catch (err: unknown) {
      const error = err as ErrorType
      console.log(error.message)
    }
  }

  return (
    <nav className="flex justify-around items-center text-[20px] gap-5 text-white">
      <Link href={'/createEvent'} className="font-medium">Create Event</Link>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Link href={'/tickets'}>
              <IoTicketOutline className="text-[#FFE047]" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tickets</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Link href={'/interested'}>
              <IoStarOutline className="text-[#FFE047]" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Interested</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <button onClick={logOut} className="font-medium">Log Out</button>
    </nav >
  )
}