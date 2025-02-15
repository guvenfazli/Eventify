import FormSection from "../formSection"
import ChooseImage from "./chooseImage"

interface ComponentProps {
  setFilePicker: React.Dispatch<React.SetStateAction<File | undefined>>
}


export default function SecondStep({ setFilePicker }: ComponentProps) {
  return (
    <>
      <FormSection formSection="Upload Image" />
      <ChooseImage setFilePicker={setFilePicker} />
    </>
  )
}