import EventFormLabel from "../eventFormLabel"
import EventFormInput from "../eventFormInput"

interface ComponentProps {
  formLabel: string
}

export default function EventDetails({ formLabel }: ComponentProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-5 justify-start items-center">
        <div className="flex w-1/6 items-center justify-end text-nowrap">
          <EventFormLabel htmlFor="title">{formLabel}</EventFormLabel>
        </div>
        <div className="flex gap-3 items-center justify-start w-full">
          <EventFormInput name="title" placeholder="Enter the name of your event" />
        </div>
      </div>
    </div>
  )
}