import CreateEventHeader from "./createEventHeader"
import StepTracker from "./stepTracker"
import MultiStepForm from "./multiStepForm"
export default function CreateEvent() {
  return (
    <div className="flex flex-col w-full p-12 gap-12 border border-red-500">
      <CreateEventHeader />
      <div className="flex flex-col w-full px-16 gap-10">
        <StepTracker />
        <MultiStepForm />
      </div>
    </div>
  )
}