import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import ChooseCustomDate from "./chooseCustomDate"
import dayjs from "dayjs"

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | undefined,
}

interface ComponentProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>
  filterSettings: FilterSettings
}


export default function DateFilter({ setFilterSettings, filterSettings }: ComponentProps) {

  function addFilter(filter: string, value: number) {
    const todaysDate = dayjs().startOf('day')
    const calculatedDate = todaysDate.add(value, 'day').startOf('day').unix()
    setFilterSettings(prev => {
      const updated = { ...prev }
      if (updated["addedDays"] === value) {
        updated[filter] = undefined
        updated["addedDays"] = undefined
        return updated
      }
      updated[filter] = calculatedDate
      updated["addedDays"] = value
      return updated
    })
  }

  return (
    <div className="flex flex-col justify-start items-start w-full gap-5 border-b pb-5 border-b-[#6F6F6F]/30">
      <p className="text-[24px] font-semibold font-opensans text-[#2D2C3C]">Date</p>
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-3">
          <Checkbox id="1" value="1" name="endDate" checked={filterSettings.addedDays === 1} onClick={() => addFilter('endDate', 1)} />
          <label htmlFor="1" className="text-[20px] font-opensans text-[#2B293D]">Today</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="2" value="2" name="endDate" checked={filterSettings.addedDays === 2} onClick={() => addFilter('endDate', 2)} />
          <label htmlFor="2" className="text-[20px] font-opensans text-[#2B293D]">Tomorrow</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="8" value="8" name="endDate" checked={filterSettings.addedDays === 8} onClick={() => addFilter('endDate', 8)} />
          <label htmlFor="8" className="text-[20px] font-opensans text-[#2B293D]">This Week</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <p className="text-[20px] font-opensans text-[#2B293D] hover:cursor-pointer hover:underline">Choose Date</p>
            </DialogTrigger>
            <DialogContent className="bg-[#F1F3F6]">
              <DialogHeader className="bg-white py-5 px-2">
                <DialogTitle className="text-[#2D2C3C] font-opensans">Choose Date</DialogTitle>
              </DialogHeader>
              <ChooseCustomDate filterSettings={filterSettings} setFilterSettings={setFilterSettings} />
              <DialogFooter>
                <button className="bg-[#2B293D] font-opensans text-white font-semibold rounded-lg py-2 px-6 hover:bg-[#2B293D]/80 duration-100 ">Choose</button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}