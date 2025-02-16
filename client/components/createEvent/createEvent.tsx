"use client"
import { useState } from "react"
import CreateEventHeader from "./createEventHeader"
import StepTracker from "./stepTracker"
import MultiStepForm from "./multiStepForm"
export default function CreateEvent() {


  const [step, setStep] = useState<number>(0)



  return (
    <div className="flex flex-col w-full p-12 gap-12">
      <CreateEventHeader />
      <div className="flex flex-col w-full px-16 gap-10">
        <StepTracker step={step} />
        <MultiStepForm step={step} setStep={setStep} />
      </div>
    </div>
  )
}