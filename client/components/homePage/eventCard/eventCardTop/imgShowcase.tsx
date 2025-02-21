"use client"
import Image from "next/image";

interface ComponentProps {
  imgURL: string
}

export default function ImageShowcase({ imgURL }: ComponentProps) {

  return (
    <>
      <Image fill src={`http://localhost:8080/${imgURL}`} alt="eventImage" className="rounded-tl-md rounded-tr-md shadow-md" />
    </>
  )
}