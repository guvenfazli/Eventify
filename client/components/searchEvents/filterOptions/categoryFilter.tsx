import { Checkbox } from "@/components/ui/checkbox"

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | null,
}

interface ComponentProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>
}

export default function CategoryFilter({ setFilterSettings }: ComponentProps) {

  function addFilter(filter: string, value: string) { // Converts the key - value into an array if there is already a value.
    setFilterSettings((prev) => {
      const updated = { ...prev }
      if (updated[filter] !== null) {

        if (Array.isArray(updated[filter])) {
          const sameValue = updated[filter]!.some((sameV) => sameV === value)
          if (sameValue) {
            const foundIndex = updated[filter].findIndex((sameV) => sameV === value)
            updated[filter].splice(foundIndex, 1)
            return updated
          }
          const chosenField = updated[filter] as string[]
          chosenField.push(value)
          return updated;
        }

        const convertedToArray = { ...prev, [filter as string]: [updated[filter]] }
        const chosenField = convertedToArray[filter] as string[]
        chosenField!.push(value)
        return convertedToArray
      }
      updated[filter] = value
      return updated
    })
  }

  return (
    <div className="flex flex-col justify-start items-start w-full gap-5 border-b pb-5 border-b-[#6F6F6F]/30">
      <p className="text-[24px] font-semibold font-opensans text-[#2D2C3C]">Category</p>
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-3">
          <Checkbox id="travel" value="travel" name="category" onClick={() => addFilter("category", "travel")} />
          <label htmlFor="travel" className="text-[20px] font-opensans text-[#2B293D]">Travel</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="entertainment" value="entertainment" name="category" onClick={() => addFilter("category", "entertainment")} />
          <label htmlFor="entertainment" className="text-[20px] font-opensans text-[#2B293D]">Entertainment</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="art" value="art" name="category" onClick={() => addFilter("category", "art")} />
          <label htmlFor="art" className="text-[20px] font-opensans text-[#2B293D]">Art</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="sport" value="sport" name="category" onClick={() => addFilter("category", "sport")} />
          <label htmlFor="sport" className="text-[20px] font-opensans text-[#2B293D]">Sports</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="business" value="business" name="category" onClick={() => addFilter("category", "business")} />
          <label htmlFor="business" className="text-[20px] font-opensans text-[#2B293D]">Business</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="tech" value="tech" name="category" onClick={() => addFilter("category", "tech")} />
          <label htmlFor="tech" className="text-[20px] font-opensans text-[#2B293D]">Technology</label>
        </div>
      </div>
    </div>
  )
}
