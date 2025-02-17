import FirstStep from "./firstStep/firstStep"
import SecondStep from "./secondStep/secondStep"
import ThirdStep from "./thirdStep/thirdStep"
import FourthStep from "./fourthStep/fourthStep"
import { BaseSyntheticEvent, useState } from "react"
import { useSelector } from "react-redux"
import { useToast } from "@/hooks/use-toast"


interface ErrorType {
  message: string
}

interface ComponentProps {
  step: number,
  setStep: React.Dispatch<React.SetStateAction<number>>,
}

export default function MultiStepForm({ step, setStep }: ComponentProps) {

  const enteredValues = useSelector((state: any) => state.rootReducer.multiFormSlice)
  const [filePicker, setFilePicker] = useState<File | undefined>()
  const [isCreating, setIsCreating] = useState<boolean>(false)
  const { toast } = useToast()


  async function createEvent(e: BaseSyntheticEvent) {
    e.preventDefault()
    const formData = { ...enteredValues }
    const fd = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value as string);
    });
    fd.append("eventImage", filePicker as File)

    try {
      setIsCreating(true)
      const response = await fetch('http://localhost:8080/admin/createEvent', {
        method: "POST",
        credentials: "include",
        body: fd
      })

      if (!filePicker) {
        const error = new Error()
        error.message = "Please choose an Image!"
        throw error
      } else if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData.message)
        throw error
      }

      const resData = await response.json()

      toast({
        title: "Success!",
        description: resData.message,
        className: "bg-[#FFE047] text-black"
      })
      setIsCreating(false)
    } catch (err: unknown) {
      const error = err as ErrorType
      toast({
        title: "Error!",
        description: error.message,
        className: "bg-red-700 text-white"
      })
      setIsCreating(false)

    }
  }


  return (
    <form onSubmit={(e) => createEvent(e)} method="POST" encType="multipart/form-data">

      {step === 0 && <FirstStep />}
      {step === 1 && <SecondStep setFilePicker={setFilePicker} />}
      {step === 2 && <ThirdStep />}
      {step === 3 && <FourthStep filePicker={filePicker} />}

      <div className="flex justify-center items-center gap-5 w-full">

        {step > 0 &&
          <button onClick={() => setStep(prev => prev -= 1)} type="button" className="bg-[#2B293D] text-white rounded-lg px-5 py-2 text-[20px] font-opensans font-bold">
            Back
          </button>
        }

        {step !== 3 &&
          <button disabled={step === 1 && !enteredValues.imageURL} onClick={() => setStep(prev => prev += 1)} type="button" className="bg-[#2B293D] text-white rounded-lg px-5 py-2 text-[20px] font-opensans font-bold disabled:bg-[#2B293D]/30">
            Continue
          </button>
        }

        {step === 3 &&
          <button disabled={isCreating} className="bg-[#FFE047] text-[#2B293D] rounded-lg px-5 py-2 text-[20px] font-opensans font-bold disabled:bg-[#FFE047]/50 disabled:text-[#2B293D]/50">
            Create Event!
          </button>
        }


      </div>

    </form>
  )
}