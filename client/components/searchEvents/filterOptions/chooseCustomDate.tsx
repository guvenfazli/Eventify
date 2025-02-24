import dayjs from "dayjs"
import { ChangeEvent } from "react"

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | undefined,
}

interface ComponentProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>
  filterSettings: FilterSettings
}

export default function ChooseCustomDate({ filterSettings, setFilterSettings }: ComponentProps) {

  function chooseDate(e: ChangeEvent<HTMLInputElement>, filter: string) {
    setFilterSettings(prev => {
      const updated = { ...prev }
      if (updated[filter] === e.target.value) {
        updated[filter] = undefined
        return updated
      }
      updated[filter] = dayjs(e.target.value).startOf('day').unix()
      return updated
    })
  }

  return (
    <div className="flex justify-around items-center w-full">
      <div className="flex flex-col items-center justify-start gap-5 p-2 w-1/3">
        <p className="text-[#2D2C3C] font-opensan font-semibold text-sm">Start Date</p>
        <input type="date" className="w-full p-2" onChange={(e) => chooseDate(e, 'startDate')} />
      </div>

      <div className="flex flex-col items-center justify-start gap-5 p-2 w-1/3">
        <p className="text-[#2D2C3C] font-opensan font-semibold text-sm">End Date</p>
        <input type="date" className="w-full p-2" onChange={(e) => chooseDate(e, 'endDate')} />
      </div>
    </div>
  )
}