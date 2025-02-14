import FormSection from "./formSection"
import EventDetails from "./eventDetails/eventDetails"

export default function MultiStepForm() {
  return (
    <form>
      <FormSection formSection="Event Details" />

      <div className="flex flex-col gap-10">
        <EventDetails formLabel="Event Title" />
        <EventDetails formLabel="Event Category" />
      </div>



    </form>
  )
}