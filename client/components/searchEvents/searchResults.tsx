import NavBar from "./navBar"
import SearchedEventCard from "./searchedEventCard/searchedEventCard"
export default function SearchResults() {
  return (
    <div className="flex justify-start items-start w-full p-3 gap-16">
      <NavBar />
      <div className="grid grid-cols-2 gap-y-5 w-full">
        <SearchedEventCard />
        <SearchedEventCard />
        <SearchedEventCard />
        <SearchedEventCard />
        <SearchedEventCard />
      </div>
    </div>
  )
}