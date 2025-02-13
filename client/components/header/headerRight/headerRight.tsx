import Link from "next/link"
import { IoTicketOutline, IoStarOutline } from "react-icons/io5";
export default function HeaderRight() {
  return (
    <nav className="flex justify-around items-center text-[20px] gap-5 text-white">
      <Link href={'/createEvent'} className="font-medium">Create Event</Link>
      <Link href={'/tickets'}><IoTicketOutline className="text-[#FFE047]" /></Link>
      <Link href={'/interested'}><IoStarOutline className="text-[#FFE047]" /></Link>
      <Link href={'/signOut'} className="font-medium">Sign Out</Link>
    </nav>
  )
}