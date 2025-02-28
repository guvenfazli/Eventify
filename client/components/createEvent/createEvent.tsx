"use client"
import { useEffect, useState } from "react"
import CreateEventHeader from "./createEventHeader"
import StepTracker from "./stepTracker"
import MultiStepForm from "./multiStepForm"
import { AuthCheck } from "@/utils/authCheck"


export default function CreateEvent() {

  const [step, setStep] = useState<number>(0)
  return (
    <AuthCheck>
      <div className="flex flex-col w-full p-12 gap-12">
        <CreateEventHeader header="Create an Event" />
        <div className="flex flex-col w-full px-16 gap-10">
          <StepTracker step={step} />
          <MultiStepForm step={step} setStep={setStep} />
        </div>
      </div>
    </AuthCheck>
  )
}