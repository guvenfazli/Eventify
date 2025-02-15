import FirstStep from "./firstStep/firstStep"
import SecondStep from "./secondStep/secondStep"
import ThirdStep from "./thirdStep/thirdStep"
import FourthStep from "./fourthStep/fourthStep"
import { useState } from "react"

interface ComponentProps {
  step: number,
  setStep: React.Dispatch<React.SetStateAction<number>>,

}

export default function MultiStepForm({ step, setStep }: ComponentProps) {

  const [filePicker, setFilePicker] = useState<File | undefined>()


  return (
    <form>

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
          <button type="button" className="bg-[#FFE047] text-[#2B293D] rounded-lg px-5 py-2 text-[20px] font-opensans font-bold">
            Create Event!
          </button>
        }


      </div>

    </form>
  )
}