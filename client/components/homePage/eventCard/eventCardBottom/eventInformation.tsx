import EventStats from "./eventStats"
export default function EventInformation() {
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="font-opensans font-semibold text-[24px] text-[#2D2C3C]">Lakeside Camping at Pawna</p>
      <p className="font-opensans font-semibold text-[18px] text-[#5A5A5A]">Adventure Geek</p>
      <p className="font-opensans text-[18px] text-[#5A5A5A]">8:30 AM - 7:30 PM</p>

      <EventStats />
    </div>
  )
}