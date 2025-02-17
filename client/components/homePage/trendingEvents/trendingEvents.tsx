import EventsSection from "../popularEvents/eventsSection/eventsSection"

interface event {
  id: string,
  title: string,
  category: string,
  startDate: number,
  endDate: number,
  startTime: string,
  endTime: string,
  location: string,
  description: string,
  eventType: string,
  ticketQuantity: number,
  ticketPrice: number,
  imageURL: string,
  createdAt: Date,
  updatedAt: Date
}

interface ComponentProps {
  trendingList: event[]

}


export default function TrendingEvents({ trendingList }: ComponentProps) {
  console.log(trendingList)
  
  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex flex-col justify-start gap-5 items-start">
        <p className="text-[40px] font-bold font-monster text-[#2D2C3C]">Trending Events Around the World</p>
      </div>

      <div className="flex flex-col justify-start gap-5 items-start">
        <EventsSection trendingList={trendingList} />
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