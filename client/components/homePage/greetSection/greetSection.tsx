"use client"

import SearchSection from "./searchSection"

export default function GreetSection({ countryList }: any) {
  return (
    <div className="flex flex-col items-center justify-center w-full relative space-y-7 min-h-[578px] bg-[url('/assets/homePage/eventPicture.jpeg')] bg-bottom bg-cover">
      <div className="absolute inset-0 bg-[#2B293D] opacity-50" />
      <div className="text-[48px] text-white font-bold z-10 font-monster tracking-wider">
        <p>Don’t miss out!</p>
        <p>Explore the <span className="text-[#FFE047]">vibrant events</span> happening locally and globally.</p>
      </div>

      <SearchSection countryList={countryList} />

    </div>
  )
}