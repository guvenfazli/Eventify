import { useDispatch, useSelector } from "react-redux";
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice";
import { BaseSyntheticEvent } from "react";

interface ComponentProps {
  setFilePicker: React.Dispatch<React.SetStateAction<File | undefined>>
}


export default function ChooseImage({ setFilePicker }: ComponentProps) {

  const dispatch = useDispatch()
  const image = useSelector((state: any) => state.rootReducer.multiFormSlice)

  function uploadImage(e: BaseSyntheticEvent) {
    const chosenFile = e.target.files[0]
    const imageURL = URL.createObjectURL(chosenFile)
    dispatch(multiStepFormAction.fillTheForm({ ["imageURL"]: imageURL }))
    setFilePicker(chosenFile)
  }



  return (
    <div className="flex flex-col gap-10 mb-10">
      <input onChange={(e) => uploadImage(e)} type="file" className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC] w-1/2" accept=".jpg, .jpeg, .png" />
    </div>
  )
}