import FormSection from "../formSection"
import EventPreview from "./eventPreview/eventPreview"

interface ComponentProps {
  filePicker: File | undefined
}

export default function FourthStep({ filePicker }: ComponentProps) {
  return (
    <div className="mb-10">
      <FormSection formSection="Event Preview" />
      <div className="flex justify-center items-start w-full p-5 border-2 border-[#2B293D] rounded-xl">
        <EventPreview />
      </div>
    </div>
  )
}