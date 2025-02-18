interface ComponentProps {
  errorMessage: string | boolean
}

export default function ClientErrorComp({ errorMessage }: ComponentProps) {
  return (
    <div className="flex w-full justify-center items-center min-h-[450px]">
      <p className="text-[24px] text-[#2D2C3C] font-bold">{errorMessage}</p>
    </div>

  )
}