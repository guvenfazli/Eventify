"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react";
import { CiCalendarDate, CiClock1 } from "react-icons/ci";
import { IoTicket } from "react-icons/io5";
import dayjs from "dayjs";
import Ticket from "./ticket/ticket";

interface ComponentProps {
  startDate: number,
  endDate: number,
}

export default function DateTimeBuyTickets({ startDate, endDate }: ComponentProps) {

  const [isProceed, setIsProceed] = useState<boolean>(false)

  const formattedDates = {
    startDate: dayjs.unix(startDate).format("DD/MM/YY"),
    startTime: dayjs.unix(startDate).format("HH:mm"),
    endDate: endDate ? dayjs.unix(endDate).format("DD/MM/YY") : undefined,
    endTime: endDate ? dayjs.unix(endDate).format("HH:mm") : undefined
  }



  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-col items-start justify-start text-[#2D2C3C] font-opensans">
        <p className="text-[36px] font-bold">Date and Time</p>

        <div className="flex items-center justify-start gap-3">
          <CiCalendarDate className="text-[30px] font-semibold" />
          <p className="font-semibold text-[24px]">{formattedDates.startDate}</p>
          {endDate !== 0 && <p className="font-semibold text-[24px]">- {formattedDates.endDate}</p>}
        </div>

        <div className="flex items-center justify-start gap-3">
          <CiClock1 className="text-[30px]" />
          <p className="font-semibold text-[24px]">{formattedDates.startTime}</p>
          {endDate !== undefined && <p className="font-semibold text-[24px]">{formattedDates.endTime}</p>}
        </div>
      </div>

      <div className="flex flex-col items-start justify-start text-[#2D2C3C] font-opensans">
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-[#FFE047] text-[28px] font-semibold font-opensans text-[#2B293D] flex items-center rounded-lg py-3 px-10 hover:cursor-pointer hover:bg-[#FFE047]/50 hover:text-[#2B293D]/50 duration-150 ease-in-out">
              <IoTicket className="mr-5" /> Buy Tickets
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#F1F3F6]">
            <DialogHeader className="bg-white py-5 px-2">
              <DialogTitle className="text-[#2D2C3C] font-opensans">Select Tickets</DialogTitle>
            </DialogHeader>
            <Ticket isProceed={isProceed} />
            <DialogFooter>
              <button onClick={() => setIsProceed(prev => !prev)} className="bg-[#2B293D] font-opensans text-white font-semibold rounded-lg py-2 px-6 hover:bg-[#2B293D]/80 duration-100 ">Proceed</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}