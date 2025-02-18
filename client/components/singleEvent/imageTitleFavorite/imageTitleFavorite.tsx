"use client"
import Image from "next/image";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useToast } from "@/hooks/use-toast";
interface ErrorType {
  message: string
}


interface ComponentProps {
  imageURL: string,
  title: string,
  eventId: string
}
export default function ImageTitleFavorite({ imageURL, title, eventId }: ComponentProps) {

  const { toast } = useToast()

  async function beInterested() {
    try {
      const response = await fetch(`http://localhost:8080/beInterested/${eventId}`, {
        method: "POST",
        credentials: "include"
      })

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData.message)
        throw error
      }

      const resData = await response.json()

      toast({
        title: "Success!",
        description: resData.message,
        className: "bg-[#FFE047] text-black"
      })

    } catch (err: unknown) {
      const error = err as ErrorType
      toast({
        title: "Error!",
        description: error.message,
        className: "bg-red-700 text-white"
      })
    }
  }




  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex justify-start items-start relative min-h-[570px] w-full mb-10 border border-red-700">
        <Image fill src={`http://localhost:8080/${imageURL.replaceAll(/\\/g, "/")}`} alt="eventImage" />
      </div>

      <div className="flex items-center justify-between w-full">
        <p className="font-extrabold text-[60px] font-opensans text-[#2D2C3C]">{title}</p>
        <button onClick={beInterested}><IoStarOutline className="text-[45px] text-[#2D2C3C]" /></button>
      </div>
    </div>
  )
}