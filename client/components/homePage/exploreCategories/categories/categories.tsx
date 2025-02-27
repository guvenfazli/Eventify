import SingleCategory from "./singleCategory"
export default function Categories() {
  return (
    <div className="flex w-full gap-4 justify-around items-start">
      <SingleCategory imageUrl="entertainment.jpg" category="entertainment" title="Entertainment" />
      <SingleCategory imageUrl="meeting.jpg" category="business" title="Business & Education" />
      <SingleCategory imageUrl="art.jpg" category="art" title="Art" />
      <SingleCategory imageUrl="sports.jpg" category="sport" title="Sports" />
      <SingleCategory imageUrl="tech.jpg" category="tech" title="Technology" />
      <SingleCategory imageUrl="travel.jpg" category="travel" title="Travel" />
    </div>
  )
}