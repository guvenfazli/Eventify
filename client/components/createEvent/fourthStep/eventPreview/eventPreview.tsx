import EventImage from "./eventImage"
import EventInformation from "./eventInformation/eventInformation"
export default function EventPreview() {
  return (
    <div className="flex flex-col w-full justify-start items-start gap-5">
      <EventImage />
      <EventInformation />
    </div>
  )
}