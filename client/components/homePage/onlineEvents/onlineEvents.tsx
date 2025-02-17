import EventsSection from "../popularEvents/eventsSection/eventsSection"
export default function OnlineEvents() {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col justify-start gap-5 items-start">
        <p className="text-[40px] font-bold font-monster text-[#2D2C3C]">Discover Best of Online Events</p>
      </div>

      <div className="flex flex-col justify-start gap-5 items-start">
        {/* <EventsSection /> */}
        <div className="flex w-full justify-center items-center">
          <button
            className="w-1/3 py-3 rounded-md text-[#2B293D] border-2 border-[#2B293D] font-opensans font-semibold text-[24px] hover:bg-[#2B293D] hover:text-white duration-150 ease-in-out">
            See More
          </button>
        </div>
      </div>
    </div>
  )
}