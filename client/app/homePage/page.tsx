import GreetSection from "@/components/homePage/greetSection/greetSection"
import ExploreCategories from "@/components/homePage/exploreCategories/exploreCategories"
export default function Page() {
  return (
    <div className="flex flex-col items-start justify-start">
      <GreetSection />
      <ExploreCategories />
    </div>
  )
}