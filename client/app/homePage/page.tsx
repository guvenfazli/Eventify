import GreetSection from "@/components/homePage/greetSection/greetSection"
import ExploreCategories from "@/components/homePage/exploreCategories/exploreCategories"
import PopularEvents from "@/components/homePage/popularEvents/popularEvents"
import OnlineEvents from "@/components/homePage/onlineEvents/onlineEvents"
import TrendingEvents from "@/components/homePage/trendingEvents/trendingEvents"

export default async function Page() {

  try {

    const response = await fetch('https://restcountries.com/v3.1/region/europe')
    const trendingAroundTheWorld = await fetch('http://localhost:8080/trendingWorldEvents?page=6', {
      credentials: "include"
    })

    if (!response.ok || !trendingAroundTheWorld.ok) {
      const resData = await response.json()
      const error = new Error(resData)
      throw error
    }

    const [countryRes, trendingRes] = await Promise.all([response, trendingAroundTheWorld])
    const [countryList, trendingList] = await Promise.all([
      countryRes.json(),
      trendingRes.json()
    ])

    return (
      <div className="flex flex-col items-start justify-start">
        <GreetSection countryList={countryList} />
        <div className="flex flex-col justify-start items-start px-32 w-full">
          <ExploreCategories />
          <div className="flex flex-col justify-start items-start gap-32 w-full">
            <TrendingEvents trendingList={trendingList.foundEvents} />
            <PopularEvents />
            <OnlineEvents />
          </div>
        </div>
      </div>
    )

  } catch (err) {
    <div className="flex flex-col items-start justify-start">
      <GreetSection />
      <div className="flex flex-col justify-start items-start px-32 w-full">
        <p>Could not fetch any countries.</p>
      </div>
    </div>
  }
}