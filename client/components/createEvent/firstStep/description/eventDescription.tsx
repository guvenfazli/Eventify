import { useDispatch, useSelector } from "react-redux"
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice"

import EventFormLabel from "../../eventFormLabel"

interface ComponentProps {
  formLabel: string
}

export default function EventDescription({ formLabel }: ComponentProps) {

  const dispatch = useDispatch()
  const multiFormData = useSelector((state: any) => state.rootReducer.multiFormSlice)

  function fillTheForm(e: React.ChangeEvent<HTMLTextAreaElement>) {
    dispatch(multiStepFormAction.fillTheForm({ ["description"]: e?.target.value }))
  }

  console.log(multiFormData)
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-5 justify-start items-center">
        <div className="flex w-1/6 items-center justify-end text-nowrap">
          <EventFormLabel htmlFor="description">{formLabel}</EventFormLabel>
        </div>
        <div className="flex gap-3 items-center justify-start w-full">
          <textarea value={multiFormData.description || ""} onChange={(e) => fillTheForm(e)} cols={150} rows={10} name="description" id="description"
            className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans outline-none placeholder:text-[#ACACAC]"
            placeholder="Please add a small text about the event..." />
        </div>
      </div>
    </div>
  )
}