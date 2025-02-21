import { Checkbox } from "@/components/ui/checkbox"

interface FilterSettings {
  srch: string | null,
  location: string | null,
  price: string | null,
  date: number | number[] | null,
  category: string | string[] | null
}

interface ComponentProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>
}

export default function CategoryFilter({ setFilterSettings }: ComponentProps) {

  function addFilter(filter: string, value: string) {
    setFilterSettings((prev) => {
      const updated = { ...prev }
      if (updated[filter] !== null) {
        console.log('Worked')
        const isArray = Array.isArray(updated[filter])
        if (isArray) {
          const sameValue = updated[filter].some((sameV: string) => sameV === value)
          if (sameValue) {
            const foundIndex = updated[filter].findIndex((sameV: string) => sameV === value)
            updated[filter].splice(foundIndex, 1)
            return updated
          }
          updated[filter].push(value)
          return updated;
        }
        const convertedToArray = { ...prev, [filter]: [updated[filter]] }
        convertedToArray[filter].push(value)
        return convertedToArray
      }
      updated[filter] = value
      return updated
    })
  }

  /*   const testObj = {
      name: "Güven",
      surname: "another Value"
    }
  
    function addFilter(filter: string, value: string) {
      const updated: { [key: string]: string[] | string } = { ...testObj }
      if (updated[filter] !== null) {
        const isArray = Array.isArray(updated[filter])
  
        if (isArray) {
          const sameValue = updated[filter].some((sameV: string) => sameV === value)
          if (sameValue) {
            const foundIndex = updated[filter].findIndex((sameV: string) => sameV === value)
            updated[filter].splice(foundIndex, 1)
            console.log(updated)
            return updated
          }
        }
  
        const convertedToArray = { ...updated, [filter]: [updated[filter]] }
        convertedToArray[filter].push(value)
        console.log(convertedToArray)
        return convertedToArray
      }
    } */



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
          <Checkbox id="art" value="art" name="category" />
          <label htmlFor="art" className="text-[20px] font-opensans text-[#2B293D]">Art</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="sport" value="sport" name="category" />
          <label htmlFor="sport" className="text-[20px] font-opensans text-[#2B293D]">Sports</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="business" value="business" name="category" />
          <label htmlFor="business" className="text-[20px] font-opensans text-[#2B293D]">Business</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="tech" value="tech" name="category" />
          <label htmlFor="tech" className="text-[20px] font-opensans text-[#2B293D]">Technology</label>
        </div>
      </div>
    </div>
  )
}
