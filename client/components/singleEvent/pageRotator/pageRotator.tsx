"use client"
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function PageRotator() {
  const router = useRouter()

  return (
    <FaArrowLeft onClick={() => router.back()} className="text-[34px] hover:cursor-pointer text-[#2B293D]" />
  )
}