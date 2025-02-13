import SingleCategory from "./singleCategory"
export default function Categories() {
  return (
    <div className="flex w-full gap-4 justify-around items-start">
      <SingleCategory imageUrl="entertainment.jpg" category="Entertainment" />
      <SingleCategory imageUrl="meeting.jpg" category="Business & Education" />



    </div>
  )
}