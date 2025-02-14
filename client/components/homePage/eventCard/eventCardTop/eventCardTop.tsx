import TagCard from "./tagCard"
export default function EventCardTop() {
  return (
    <div className="flex w-full rounded-tl-lg rounded-tr-lg min-h-[254px] relative bg-[url('/assets/homePage/eventPicture.jpeg')] bg-bottom bg-cover">
      <TagCard eventTag="Education" />
    </div>
  )
}