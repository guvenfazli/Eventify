import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from "next/link"
import { IoTicketOutline, IoStarOutline } from "react-icons/io5";
export default function HeaderRight() {
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

      <Link href={'/signOut'} className="font-medium">Sign Out</Link>
    </nav >
  )
}