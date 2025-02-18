import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function CreateEventHeader() {

  const router = useRouter()

  return (
    <div className="flex justify-start items-center gap-10 text-[#2D2C3C] text-[48px] font-bold font-monster">
      <FaArrowLeft onClick={() => router.back()} className="text-[34px] hover:cursor-pointer" />
      <p>Create a New Event</p>
    </div>
  )
}