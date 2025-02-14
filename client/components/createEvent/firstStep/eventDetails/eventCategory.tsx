import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import EventFormLabel from "../../eventFormLabel"
import { useDispatch, useSelector } from "react-redux"
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice"


interface ComponentProps {
  formLabel: string
}

export default function EventCategory({ formLabel }: ComponentProps) {

  const dispatch = useDispatch()
  const multiFormData = useSelector((state: any) => state.rootReducer.multiFormSlice)

  function chooseCategory(e: string) {
    dispatch(multiStepFormAction.fillTheForm({ ["category"]: e }))
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-5 justify-start items-center">
        <div className="flex w-1/6 items-center justify-end text-nowrap">
          <EventFormLabel htmlFor="category">{formLabel}</EventFormLabel>
        </div>
        <div className="flex gap-3 items-center justify-start w-full">
          <Select value={multiFormData.category || ""} onValueChange={(e) => chooseCategory(e)} name="category">
            <SelectTrigger className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC] w-1/2">
              <SelectValue placeholder="Please Choose a Category!" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="travel">Travel</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="art">Art</SelectItem>
              <SelectItem value="sport">Sports</SelectItem>
              <SelectItem value="tech">Technology</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>

  )
}