import EventsSection from "./eventsSection/eventsSection"

export default function PopularEvents() {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col justify-start gap-5 items-start">
        <p className="text-[40px] font-bold font-monster text-[#2D2C3C]">Popular Events in Your Country</p>
        <div className="flex justify-start space-x-10 items-center text-[#6F6F6F]">
          <button className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 py-1 rounded-full">All</button>
          <button className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 py-1 rounded-full">Today</button>
          <button className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 py-1 rounded-full">Tomorrow</button>
          <button className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 py-1 rounded-full">Free</button>
        </div>
      </div>

      <EventsSection />
    </div>
  )
}