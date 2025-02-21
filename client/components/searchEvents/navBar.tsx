import PriceFilter from "./filterOptions/priceFilter"
import DateFilter from "./filterOptions/dateFilter"
import CategoryFilter from "./filterOptions/categoryFilter"

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | null,
}

interface ComponentProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>
  filterSettings: FilterSettings
}

export default function NavBar({ setFilterSettings, filterSettings }: ComponentProps) {
  return (
    <form className="flex flex-col w-1/5 justify-start items-start px-8 py-5 gap-12 border-r border-r-[#6F6F6F]/30">
      <p className="font-monster text-[32px] font-semibold text-black">Filters</p>
      <PriceFilter setFilterSettings={setFilterSettings} filterSettings={filterSettings} />
      <DateFilter setFilterSettings={setFilterSettings} filterSettings={filterSettings} />
      <CategoryFilter setFilterSettings={setFilterSettings} />

      <div className="flex justify-center items-center w-full">
        <button className="bg-[#FFE047] text-[20px] w-full py-2 font-semibold font-opensans text-[#2B293D] rounded-lg hover:cursor-pointer hover:bg-[#FFE047]/50 hover:text-[#2B293D]/50 duration-150 ease-in-out disabled:bg-[#FFE047]/60 disabled:text-[#2B293D]/60 disabled:pointer-events-none">
          Filter
        </button>
      </div>
    </form>
  )
}