import { FaArrowLeft } from "react-icons/fa";

export default function CreateEventHeader() {
  return (
    <div className="flex justify-start items-center gap-10 text-[#2D2C3C] text-[48px] font-bold font-monster">
      <FaArrowLeft className="text-[34px]" />
      <p>Create a New Event</p>
    </div>
  )
}