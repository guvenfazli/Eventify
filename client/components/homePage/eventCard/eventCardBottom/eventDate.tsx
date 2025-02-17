import dayjs from "dayjs"
interface ComponentProps {
  startDate: number,
  endDate: number
}

export default function EventDate({ startDate, endDate }: ComponentProps) {

  const start = dayjs.unix(startDate).format("MMM")
  const startDay = dayjs.unix(startDate).format("DD")
  const end = dayjs.unix(endDate).format("DD")

  return (
    <div className="flex flex-col text-center items-center justify-start">
      <p className="font-monster font-semibold text-[24px] text-[#4539B4]">{start.toLocaleUpperCase()}</p>
      <p className="font-monster font-bold text-[26px] text-[#2D2C3C]">{startDay} - {end}</p>
    </div>
  )
}