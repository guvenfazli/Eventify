import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import EventFormLabel from "../../eventFormLabel"
import { useSelector, useDispatch } from "react-redux"
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice"

interface ComponentProps {
  formLabel: string
}

interface CountryStoreState {
  rootReducer: {
    countrySlice: {
      countryList: any
    }
  }
}

export default function EventLocation({ formLabel }: ComponentProps) {

  const countryList = useSelector((state: CountryStoreState) => state.rootReducer.countrySlice.countryList)

  const dispatch = useDispatch()
  const multiFormData = useSelector((state: any) => state.rootReducer.multiFormSlice)

  function fillTheForm(e: string) {
    dispatch(multiStepFormAction.fillTheForm({ ["location"]: e }))
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-5 justify-start items-center">
        <div className="flex w-1/6 items-center justify-end text-nowrap">
          <EventFormLabel htmlFor="title">{formLabel}</EventFormLabel>
        </div>
        <div className="flex gap-3 items-center justify-start w-full">
          <Select value={multiFormData.location || ""} onValueChange={(e) => fillTheForm(e)}>
            <SelectTrigger className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC] w-1/2">
              <SelectValue placeholder="Please Choose a Location!" />
            </SelectTrigger>
            <SelectContent>
              {countryList?.map((country: { name: { common: string } }) => <SelectItem key={country.name.common} value={country.name.common}>{country.name.common}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}