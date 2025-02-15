import FormSection from "../formSection"
import EventPreview from "./eventPreview/eventPreview"

export default function FourthStep() {
  return (
    <div>
      <FormSection formSection="Event Preview" />
      <div className="flex justify-center items-start w-full p-5 border-2 border-[#2B293D] rounded-xl">
        <EventPreview />
      </div>
    </div>
  )
}