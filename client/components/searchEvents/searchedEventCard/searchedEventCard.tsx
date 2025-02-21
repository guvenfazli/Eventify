import CardLeft from "./cardLeft/cardLeft"
import CardRight from "./cardRight/cardRight"

export default function SearchedEventCard() {
  return (
    <div className="flex justify-start items-start gap-2 p-3">
      <CardLeft />
      <CardRight />
    </div>
  )
}