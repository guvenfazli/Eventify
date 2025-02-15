import EventImage from "./eventImage"
import EventInformation from "./eventInformation/eventInformation"
import EventTitle from "./eventInformation/eventTitle"
import EventLocationCategory from "./eventLocationCategory/eventLocationCategory"
import EventDescription from "./eventInformation/eventDescription"
export default function EventPreview() {
  return (
    <div className="flex flex-col w-full justify-start items-start gap-5">
      <EventImage />
      <EventTitle />
      <div className="flex justify-between w-full">
        <EventInformation />
        <EventLocationCategory />
      </div>
      <EventDescription />
    </div>
  )
}