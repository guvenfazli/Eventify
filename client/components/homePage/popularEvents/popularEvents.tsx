import EventsSection from "./eventsSection/eventsSection"

export default function PopularEvents() {
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col justify-start gap-5 items-start">
        <p className="text-[40px] font-bold font-monster text-[#2D2C3C]">Popular Events in Your Country</p>
        <div className="flex justify-start space-x-10 items-center text-[#6F6F6F]">
          <button
            className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out">
            All
          </button>
          <button
            className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out">Today</button>
          <button
            className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out">Tomorrow</button>
          <button
            className="text-[20px] font-semibold font-opensans border border-[#6F6F6F] px-5 rounded-full hover:bg-[#FFE047] hover:text-[#2D2C3C] hover:border-[#2D2C3C] duration-150 ease-out">Free</button>
        </div>
      </div>

      <div className="flex flex-col justify-start gap-5 items-start w-full">
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