"use client"
import Image from "next/image";

interface ComponentProps {
  imgURL: string
}

export default function ImageShowcase({ imgURL }: ComponentProps) {
  
  console.log(imgURL)
  return (
    <>
      <Image fill src={`http://localhost:8080/${imgURL}`} alt="eventImage" />
    </>
  )
}