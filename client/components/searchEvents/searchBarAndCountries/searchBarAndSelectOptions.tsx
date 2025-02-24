"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSearchParams } from "next/navigation";
import { SlLocationPin } from "react-icons/sl";
import { useSelector } from "react-redux";

interface CountryStoreState {
  rootReducer: {
    countrySlice: {
      countryList: any
    }
  }
}

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | null,
}

interface ComponentProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>,
  filterSettings: FilterSettings
}

export default function SearchBarAndSelectOptions({ setFilterSettings, filterSettings }: ComponentProps) {

  const countryList = useSelector((state: CountryStoreState) => state.rootReducer.countrySlice.countryList)
  const searchParams = useSearchParams()
  const srch: string | null = searchParams.get('srch')
  const location: string | null = searchParams.get('location')

  function searchNewEvents(filter: string, e: any) {
    setFilterSettings((prev) => {
      const updatedFilterList = { ...prev }
      if (filter === 'location') {
        updatedFilterList[filter] = e
      } else {
        updatedFilterList[filter] = e.target.value
      }
      return updatedFilterList
    })
  }



  return (
    <div className="flex items-center justify-center z-10 max-h-[72px] w-full">
      <div className="flex w-1/2 relative items-center">
        <input className="w-full pr-3 pl-5 py-5 outline-none font-monster text-[20px] rounded-tl-lg rounded-bl-lg" placeholder={`${srch ? srch : "Search Events, Categories, Locations..."}`} onChange={(e) => searchNewEvents('srch', e)} />
        <div className="flex relative items-center">
          <SlLocationPin className="absolute text-3xl text-[#5A5A5A] left-3" />
          <Select onValueChange={(e) => searchNewEvents('location', e)} >
            <SelectTrigger className="pr-3 w-[280px] pl-12 py-5 border-1 border-white border-l border-l-gray-300 outline-none font-monster text-[20px]">
              <SelectValue placeholder={location ? location : "Please Choose a Country!"} />
            </SelectTrigger>
            <SelectContent>
              {countryList.map((country: { name: { common: string } }) => <SelectItem key={country.name.common} value={country.name.common}>{country.name.common}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}