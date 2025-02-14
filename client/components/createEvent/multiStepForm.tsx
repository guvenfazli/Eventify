import FirstStep from "./firstStep/firstStep"
import SecondStep from "./secondStep/secondStep"
interface ComponentProps {
  step: number,
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function MultiStepForm({ step, setStep }: ComponentProps) {
  return (
    <form>

      {step === 0 && <FirstStep />}
      {step === 1 && <SecondStep />}



      <div className="flex justify-center items-center w-full">

        {step > 0 &&
          <button onClick={() => setStep(prev => prev -= 1)} type="button" className="bg-[#2B293D] text-white rounded-lg px-5 py-2 text-[20x] font-opensans font-bold">
            Back
          </button>
        }

        <button onClick={() => setStep(prev => prev += 1)} type="button" className="bg-[#2B293D] text-white rounded-lg px-5 py-2 text-[20x] font-opensans font-bold">
          Continue
        </button>
      </div>

    </form>
  )
}