import TopSection from "@/components/searchEvents/searchBarAndCountries/topSection"
import SearchResults from "@/components/searchEvents/searchResults"
export default function Page() {
  
  return (
    <div className="flex flex-col items-start justify-start">
      <TopSection />
      <SearchResults />
    </div>
  )
}