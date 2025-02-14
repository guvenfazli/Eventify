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
          <ChooseDateTime htmlFor="startDate" inputType="date" label="Start Date *" name="startDate" />
          <ChooseDateTime htmlFor="endDate" inputType="date" label="End Date" name="endDate" />
          <ChooseDateTime htmlFor="startTime" inputType="text" label="Start Time *" name="startTime" placeHolder="07:00 PM" />
          <ChooseDateTime htmlFor="endTime" inputType="text" label="End Time" name="endTime" placeHolder="12:00 AM" />
        </div>
      </div>
    </div>
  )
}