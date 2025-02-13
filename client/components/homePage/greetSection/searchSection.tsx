import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

export default function SearchSection({ countryList }: any) {

  return (
    <div className="flex items-center justify-center z-10 max-h-[72px] w-full">
      <div className="flex w-1/2 relative items-center">
        <FiSearch className="absolute text-4xl text-[#5A5A5A] left-4" />
        <input className="w-full pr-3 pl-16 py-5 outline-none font-monster text-[20px] rounded-tl-lg rounded-bl-lg " placeholder="Search Events, Categories, Locations..." />
        <div className="flex relative items-center">
          <SlLocationPin className="absolute text-3xl text-[#5A5A5A] left-3" />
          <Select>
            <SelectTrigger className="pr-3 w-[280px] pl-12 py-5 border-1 border-white border-l border-l-gray-300 outline-none font-monster text-[20px]">
              <SelectValue placeholder="Please Choose a Country!" />
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