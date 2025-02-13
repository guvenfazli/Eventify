import { FiSearch } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
export default function SearchSection() {
  return (
    <div className="flex items-center justify-center z-10 w-full">
      <div className="flex w-1/2 relative items-center">
        <FiSearch className="absolute text-4xl text-[#5A5A5A] left-4" />
        <input className="w-full pr-3 pl-16 py-5 outline-none font-monster text-[20px] rounded-tl-lg rounded-bl-lg " placeholder="Search Events, Categories, Locations..." />
        <div className="flex relative items-center">
          <SlLocationPin className="absolute text-3xl text-[#5A5A5A] left-3" />
          <select className="pr-3 pl-10 py-5 border-2 border-white border-l border-l-gray-300 outline-none font-monster text-[20px] rounded-tr-lg rounded-br-lg">
            <option>Please Choose a Country!</option>
          </select>
        </div>
      </div>
    </div>
  )
}