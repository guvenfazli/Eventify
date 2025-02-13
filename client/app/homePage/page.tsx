import GreetSection from "@/components/homePage/greetSection/greetSection"
import ExploreCategories from "@/components/homePage/exploreCategories/exploreCategories"
export default async function Page() {

  try {

    const response = await fetch('https://restcountries.com/v3.1/region/europe')
    if (!response.ok) {
      const resData = await response.json()
      const error = new Error(resData)
      throw error
    }

    const countryList = await response.json()

    return (
      <div className="flex flex-col items-start justify-start">
        <GreetSection countryList={countryList} />
        <div className="flex flex-col justify-start items-start px-32 w-full">
          <ExploreCategories />
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