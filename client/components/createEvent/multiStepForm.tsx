import FormSection from "./formSection"
import EventDetails from "./eventDetails/eventDetails"
import EventCategory from "./eventDetails/eventCategory"
import DatenTime from "./date&time/dateTime"
import EventLocation from "./eventLocation/eventLocation"
export default function MultiStepForm() {
  return (
    <form>
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


    </form>
  )
}