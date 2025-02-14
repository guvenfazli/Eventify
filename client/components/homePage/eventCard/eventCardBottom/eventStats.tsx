import { IoTicket, IoStar } from "react-icons/io5";
export default function EventStats() {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="flex justify-start items-center gap-1">
        <IoTicket className="text-[#5A5A5A]" />
        <p className="font-semibold font-opensans text-[#5A5A5A]">EUR 70</p>
      </div>

      <div className="flex justify-start items-center gap-1">
        <IoStar className="text-[#4539B4]" />
        <p className="font-semibold font-opensans text-[#5A5A5A]">267 Interested</p>
      </div>
    </div>
  )
}