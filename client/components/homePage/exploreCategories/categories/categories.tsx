import SingleCategory from "./singleCategory"
export default function Categories() {
  return (
    <div className="flex w-full gap-4 justify-around items-start">
      <SingleCategory imageUrl="entertainment.jpg" category="Entertainment" />
      <SingleCategory imageUrl="meeting.jpg" category="Business & Education" />
      <SingleCategory imageUrl="art.jpg" category="Art" />
      <SingleCategory imageUrl="sports.jpg" category="Sports" />
      <SingleCategory imageUrl="tech.jpg" category="Technology" />
      <SingleCategory imageUrl="travel.jpg" category="Technology" />
    </div>
  )
}