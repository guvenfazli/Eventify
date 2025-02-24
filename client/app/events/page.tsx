"use client"
import { useState } from "react"
import { useSearchParams } from "next/navigation"
import TopSection from "@/components/searchEvents/searchBarAndCountries/topSection"
import SearchResults from "@/components/searchEvents/searchResults"

interface FilterSettings {
  [key: string]: string | string[] | number | number[] | undefined,
}

export default function Page() {

  const searchParams = useSearchParams()
  const srch: string | null = searchParams.get('srch')
  const location: string | null = searchParams.get('location')

  const [filterSettings, setFilterSettings] = useState<FilterSettings>({
    srch: srch ? srch : undefined,
    location: location ? location : undefined,
    eventType: undefined,
    startDate: undefined,
    endDate: undefined,
    addedDays: undefined,
    category: undefined
  })

  return (
    <div className="flex flex-col items-start justify-start">
      <TopSection setFilterSettings={setFilterSettings} filterSettings={filterSettings} />
      <SearchResults setFilterSettings={setFilterSettings} filterSettings={filterSettings} />
    </div>
  )
}