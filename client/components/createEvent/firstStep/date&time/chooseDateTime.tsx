import dayjs from "dayjs"
import { useDispatch, useSelector } from "react-redux"
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice"

interface ComponentProps {
  label: string
  htmlFor: string,
  inputType: string,
  name: string,
  placeHolder?: string
}

export default function ChooseDateTime({ label, htmlFor, inputType, name, placeHolder }: ComponentProps) {

  const dispatch = useDispatch()
  const multiFormData = useSelector((state: any) => state.rootReducer.multiFormSlice)

  function fillTheForm(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(multiStepFormAction.fillTheForm({ [name]: e?.target.value }))
    const chosenDate = dayjs(e?.target.value).unix()
    console.log(chosenDate)
  }

  return (
    <div className="flex flex-col justify-start items-start">
      <label className="font-opensans font-semibold text-[20px] text-[#2D2C3C]" htmlFor={htmlFor}>{label}</label>
      <input onChange={(e) => fillTheForm(e)} className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC]" placeholder={placeHolder} type={inputType} name={name} />
    </div>
  )
}