import FormSection from "../formSection"
import ChooseImage from "./chooseImage"

export default function SecondStep() {
  return (
    <>
      <FormSection formSection="Upload Image" />
      <ChooseImage />
    </>
  )
}