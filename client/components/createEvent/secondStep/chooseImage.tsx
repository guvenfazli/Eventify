import { useDispatch } from "react-redux";
import { multiStepFormAction } from "@/store/slices/multiStepFormSlice";
import { BaseSyntheticEvent } from "react";




export default function ChooseImage() {

  const dispatch = useDispatch()

  function uploadImage(e: BaseSyntheticEvent) {
    const chosenFile = e.target.files[0]
    const imageURL = URL.createObjectURL(chosenFile)
    dispatch(multiStepFormAction.fillTheForm({ ["imageURL"]: imageURL }))
    dispatch(multiStepFormAction.fillTheForm({ ["image"]: chosenFile }))
  }



  return (
    <div className="flex flex-col gap-10 mb-10">
      <input onChange={(e) => uploadImage(e)} type="file" className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC] w-1/2" accept="jpg, jpeg, png" />
    </div>
  )
}