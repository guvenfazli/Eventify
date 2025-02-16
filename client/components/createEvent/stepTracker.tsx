interface ComponentProps {
  step: number
}
export default function StepTracker({ step }: ComponentProps) {
  return (
    <div className="flex w-full relative items-center justify-between">
      <progress value={step} max={3} className="w-full absolute z-0 h-1 [&::-webkit-progress-bar]:bg-[#6F6F6F]/40 [&::-webkit-progress-value]:bg-[#2B293D]"></progress>

      <div className={`flex z-10 items-center justify-center px-2 py-2 bg-[#D7D5EA] border-4 border-[#2B293D] rounded-full`} />
      <div className={`flex z-10 items-center justify-center px-2 py-2 bg-[#D7D5EA] border-4 border-[#2B293D] rounded-full ${step < 1 && "bg-[#F6F6F6] border-[#6F6F6F]/40"}`} />
      <div className={`flex z-10 items-center justify-center px-2 py-2 bg-[#D7D5EA] border-4 border-[#2B293D] rounded-full ${step < 2 && "bg-[#F6F6F6] border-[#6F6F6F]/40"}`} />
      <div className={`flex z-10 items-center justify-center px-2 py-2 bg-[#D7D5EA] border-4 border-[#2B293D] rounded-full ${step < 3 && "bg-[#F6F6F6] border-[#6F6F6F]/40"}`} />
    </div>
  )
}