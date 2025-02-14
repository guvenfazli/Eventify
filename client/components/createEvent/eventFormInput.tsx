import { useDispatch, useSelector } from "react-redux"
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice"


interface ComponentProps {
  placeholder: string,
  name: string
}

export default function EventFormInput({ placeholder, name }: ComponentProps) {

  const dispatch = useDispatch()
  const multiFormData = useSelector((state: any) => state.rootReducer.multiFormSlice)

  function fillTheForm(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(multiStepFormAction.fillTheForm({ [name]: e?.target.value }))
  }



  return (
    <input onChange={fillTheForm} value={multiFormData[name] || ""} className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC] w-1/2" placeholder={placeholder} name={name} />
  )
}