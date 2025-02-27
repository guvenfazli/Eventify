import { cookies } from "next/headers"
import GreetSection from "@/components/homePage/greetSection/greetSection"
import ExploreCategories from "@/components/homePage/exploreCategories/exploreCategories"
import PopularEvents from "@/components/homePage/popularEvents/popularEvents"
import OnlineEvents from "@/components/homePage/onlineEvents/onlineEvents"
import TrendingEvents from "@/components/homePage/trendingEvents/trendingEvents"

export default async function Page() {

  const cookie = cookies()

  try {
    const trendingAroundTheWorld = await fetch('http://localhost:8080/trendingWorldEvents?page=6', {
      headers: { Cookie: (await cookie).toString() }
    })

    if (!trendingAroundTheWorld.ok) {
      const resData = await trendingAroundTheWorld.json()
      const error = new Error(resData)
      throw error
    }

    const trendingList = await trendingAroundTheWorld.json()

    return (
      <div className="flex flex-col items-start justify-start">
        <GreetSection countryList={trendingList.countryList} />
        <div className="flex flex-col justify-start items-start px-32 w-full">
          <ExploreCategories />
          <div className="flex flex-col justify-start items-start gap-32 w-full">
            <TrendingEvents trendingList={trendingList.foundEvents} isLimit={trendingList.isLimit} />
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