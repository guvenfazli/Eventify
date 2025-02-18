import EventFormLabel from "../../eventFormLabel"
import ChooseDateTime from "./chooseDateTime"
interface ComponentProps {
  formLabel: string
}
export default function DatenTime({ formLabel }: ComponentProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-5 justify-start items-start">
        <div className="flex w-1/6 items-center justify-end text-nowrap">
          <EventFormLabel htmlFor="title">{formLabel}</EventFormLabel>
        </div>
        <div className="flex gap-3 items-center justify-start w-full">
          <ChooseDateTime htmlFor="startDate" inputType="datetime-local" label="Start Date *" name="startDate" />
          <ChooseDateTime htmlFor="endDate" inputType="datetime-local" label="End Date" name="endDate" />
        </div>
      </div>
    </div>
  )
}