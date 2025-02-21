import { Checkbox } from "@/components/ui/checkbox"

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | null,
}

interface ComponentProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>,
  filterSettings: FilterSettings
}

export default function PriceFilter({ setFilterSettings, filterSettings }: ComponentProps) {

  function addFilter(filter: string, value: string) {
    setFilterSettings(prev => {
      const updated = { ...prev }
      if (updated[filter] === value) {
        updated[filter] = null
        return updated
      }
      updated[filter] = value
      return updated
    })
  }


  return (
    <div className="flex flex-col justify-start items-start w-full gap-5 border-b pb-5 border-b-[#6F6F6F]/30">
      <p className="text-[24px] font-semibold font-opensans text-[#2D2C3C]">Price</p>
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-3">
          <Checkbox checked={filterSettings.eventType === "free"} id="free" value="free" name="eventType" onClick={() => addFilter('eventType', 'free')} />
          <label htmlFor="free" className="text-[20px] font-opensans text-[#2B293D]">Free</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox checked={filterSettings.eventType === "paid"} id="paid" value="paid" name="eventType" onClick={() => addFilter('eventType', 'paid')} />
          <label htmlFor="paid" className="text-[20px] font-opensans text-[#2B293D]">Paid</label>
        </div>
      </div>
    </div>
  )
}