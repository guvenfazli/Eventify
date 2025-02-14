import TagCard from "./tagCard"
export default function EventCardTop() {
  return (
    <div className="flex w-full rounded-tl-lg rounded-tr-lg min-h-[254px] relative border border-green-900">
      <TagCard />
      <p>This will be the place for image, tag, add fav.</p>
    </div>
  )
}