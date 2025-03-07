"use client"
import Image from "next/image";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
interface ErrorType {
  message: string
}

interface ComponentProps {
  imageURL: string,
  title: string,
  eventId: string,
  interested: boolean
}

export default function ImageTitleFavorite({ imageURL, title, eventId, interested }: ComponentProps) {

  const { toast } = useToast()
  const [isInterested, setIsInterested] = useState<boolean>(interested)

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
      setIsInterested(resData.isInterested)

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
      <div className="flex w-full relative min-h-[570px]">
        <div
          className="absolute blur-sm top-0 right-0 bottom-0 left-0" style={{ background: `url(http://localhost:8080/${imageURL.replaceAll(/\\/g, "/")})`, backgroundPosition: "center", backgroundSize: "contain" }} />
        <Image fill src={`http://localhost:8080/${imageURL.replaceAll(/\\/g, "/")}`} alt="uploadedEventPic" className="rounded-3xl" style={{ objectFit: "contain" }} />
      </div>

      <div className="flex items-center justify-between w-full">
        <p className="font-extrabold text-[60px] font-opensans text-[#2D2C3C]">{title}</p>
        {isInterested ? <button onClick={beInterested}><IoStar className="text-[45px] text-[#FFE047]" /></button> : <button onClick={beInterested}><IoStarOutline className="text-[45px] text-[#2D2C3C]" /></button>
        }
      </div>
    </div>
  )
}