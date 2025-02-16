import FirstStep from "./firstStep/firstStep"
import SecondStep from "./secondStep/secondStep"
import ThirdStep from "./thirdStep/thirdStep"
import FourthStep from "./fourthStep/fourthStep"
import { BaseSyntheticEvent, useState } from "react"
import { useSelector } from "react-redux"

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



  async function createEvent(e: BaseSyntheticEvent) {
    e.preventDefault()
    console.log(filePicker)
    const formData = { ...enteredValues }
    const fd = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value as string);
    });
    fd.append("eventImage", filePicker as File)

    try {
      const response = await fetch('http://localhost:8080/admin/createEvent', {
        method: "POST",
        credentials: "include",
        body: fd
      })

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData.message)
        throw error
      }

      const resData = await response.json()

    } catch (err: unknown) {
      const error = err as ErrorType
      console.log(error.message)
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
          <button onClick={() => setStep(prev => prev += 1)} type="button" className="bg-[#2B293D] text-white rounded-lg px-5 py-2 text-[20px] font-opensans font-bold">
            Continue
          </button>
        }

        {step === 3 &&
          <button className="bg-[#FFE047] text-[#2B293D] rounded-lg px-5 py-2 text-[20px] font-opensans font-bold">
            Create Event!
          </button>
        }


      </div>

    </form>
  )
}