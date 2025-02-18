import dayjs from "dayjs"
import { useDispatch, useSelector } from "react-redux"
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice"
import { useToast } from "@/hooks/use-toast"
interface ComponentProps {
  label: string
  htmlFor: string,
  inputType: string,
  name: string,
  placeHolder?: string
}

export default function ChooseDateTime({ label, htmlFor, inputType, name, placeHolder }: ComponentProps) {

  const dispatch = useDispatch()
  const { toast } = useToast()
  const multiFormData = useSelector((state: any) => state.rootReducer.multiFormSlice)
  console.log(multiFormData)
  function fillTheForm(e: React.ChangeEvent<HTMLInputElement>) {
    const todaysDate = dayjs(new Date()).unix()
    const chosenTimestamp = dayjs(e?.target.value).unix()

    if (todaysDate > chosenTimestamp) {
      toast({
        title: "Error!",
        description: "Date and time can not be older than today!",
        className: "bg-red-700 text-white"
      })
    }

    dispatch(multiStepFormAction.fillTheForm({ [name]: chosenTimestamp }))

  }

  return (
    <div className="flex flex-col justify-start items-start">
      <label className="font-opensans font-semibold text-[20px] text-[#2D2C3C]" htmlFor={htmlFor}>{label}</label>
      <input onChange={(e) => fillTheForm(e)} className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC]" placeholder={placeHolder} type={inputType} name={name} />
    </div>
  )
}