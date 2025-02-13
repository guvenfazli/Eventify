import GreetSection from "@/components/homePage/greetSection/greetSection"
import ExploreCategories from "@/components/homePage/exploreCategories/exploreCategories"
export default function Page() {
  return (
    <div className="flex flex-col items-start justify-start">
      <GreetSection />
      <div className="flex flex-col justify-start items-start px-32 w-full">
        <ExploreCategories />
      </div>
    </div>
  )
}