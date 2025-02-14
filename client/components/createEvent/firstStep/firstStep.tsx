import FormSection from "../formSection"
import EventDetails from "./eventDetails/eventDetails"
import EventCategory from "./eventDetails/eventCategory"
import DatenTime from "./date&time/dateTime"
import EventLocation from "./eventLocation/eventLocation"
import EventDescription from "./description/eventDescription"





export default function FirstStep() {
  return (
    <>
      <FormSection formSection="Event Details" />

      <div className="flex flex-col gap-10 mb-10">
        <EventDetails formLabel="Event Title" />
        <EventCategory formLabel="Event Category" />
      </div>

      <FormSection formSection="Date & Time" />

      <div className="flex flex-col gap-10 mb-10">
        <DatenTime formLabel="Sessions" />
      </div>

      <FormSection formSection="Location" />

      <div className="flex flex-col gap-10 mb-10">
        <EventLocation formLabel="Where?" />
      </div>

      <FormSection formSection="Description" />

      <div className="flex flex-col gap-10 mb-10">
        <EventDescription formLabel="Description" />
      </div>
    </>
  )
}