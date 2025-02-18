import { useSelector, useDispatch } from "react-redux";
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice";
import { useState } from "react";

interface ComponentProps {
  label: string
  htmlFor: string,
  inputType: string,
  name: string,
  placeHolder?: string
}

export default function TicketInfos({ label, htmlFor, inputType, name, placeHolder }: ComponentProps) {

  const dispatch = useDispatch()
  const multiStepValues = useSelector((state: any) => state.rootReducer.multiFormSlice)
  const [numError, isNumError] = useState<boolean>(false)

  function changeTicketInfoValue(type: string, e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 0 && isNaN(+e.target.value)) {
      isNumError(true)
    } else {
      isNumError(false)
      dispatch(multiStepFormAction.fillTheForm({ [name]: +e.target.value }))
    }
  }

  return (
    <div className="flex flex-col justify-start items-start">
      <label className="font-opensans font-semibold text-[20px] text-[#2D2C3C]" htmlFor={htmlFor}>{label}</label>
      <input value={multiStepValues[name] || ""} onChange={(e) => changeTicketInfoValue(name, e)} className={`border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC] ${numError && "border-red-600"}`} placeholder={placeHolder} type={inputType} name={name} />
    </div>
  )
}