"use client"
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface ComponentProps {
  header: string
}

export default function CreateEventHeader({ header }: ComponentProps) {

  const router = useRouter()

  return (
    <div className="flex justify-start items-center gap-10 text-[#2D2C3C] text-[48px] font-bold font-monster w-full">
      <FaArrowLeft onClick={() => router.back()} className="text-[34px] hover:cursor-pointer" />
      <p>{header}</p>
    </div>
  )
}