import PriceFilter from "./filterOptions/priceFilter"
import DateFilter from "./filterOptions/dateFilter"
import CategoryFilter from "./filterOptions/categoryFilter"

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | null,
}

interface event {
  id: string,
  title: string,
  category: string,
  startDate: number,
  endDate: number,
  location: string,
  description: string,
  eventType: string,
  ticketQuantity: number,
  ticketPrice: number,
  imageURL: string,
  createdAt: Date,
  updatedAt: Date,
  interested: number
}

interface ComponentProps {
  setFilterSettings: React.Dispatch<React.SetStateAction<FilterSettings>>
  setEventList: React.Dispatch<React.SetStateAction<event[]>>
  setIsError: React.Dispatch<React.SetStateAction<boolean | string>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  filterSettings: FilterSettings,

}

interface ErrorType {
  message: string
}

export default function NavBar({ setFilterSettings, setEventList, filterSettings, setIsError, setIsLoading }: ComponentProps) {

  async function filterEvents() {
    try {
      setIsError(false)
      setIsLoading(true)
      const response = await fetch(`http://localhost:8080/searchEvents?srch=${filterSettings.srch}&location=${filterSettings.location}&eventType=${filterSettings.eventType}&startDate=${filterSettings.date}&category=${filterSettings.category}`)

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData.message)
        throw error
      }

      const resData = await response.json()

      setEventList(resData.filteredEvents)
      setIsLoading(false)
    } catch (err: unknown) {
      const error = err as ErrorType
      setIsError(error.message)
      setIsLoading(false)
    }
  }




  return (
    <div className="flex flex-col w-1/5 justify-start items-start px-8 py-5 gap-12 border-r border-r-[#6F6F6F]/30">
      <p className="font-monster text-[32px] font-semibold text-black">Filters</p>
      <PriceFilter setFilterSettings={setFilterSettings} filterSettings={filterSettings} />
      <DateFilter setFilterSettings={setFilterSettings} filterSettings={filterSettings} />
      <CategoryFilter setFilterSettings={setFilterSettings} />

      <div className="flex justify-center items-center w-full">
        <button onClick={filterEvents} className="bg-[#FFE047] text-[20px] w-full py-2 font-semibold font-opensans text-[#2B293D] rounded-lg hover:cursor-pointer hover:bg-[#FFE047]/50 hover:text-[#2B293D]/50 duration-150 ease-in-out disabled:bg-[#FFE047]/60 disabled:text-[#2B293D]/60 disabled:pointer-events-none">
          Filter
        </button>
      </div>
    </div>
  )
}