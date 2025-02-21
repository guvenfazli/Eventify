import SearchBarAndSelectOptions from "./searchBarAndSelectOptions"

export default function TopSection() {
  return (
    <div className="flex flex-col items-center justify-center w-full relative space-y-7 min-h-[578px] bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-[#382933] via-[#3b5249] to-[#519872]">
      <div className="absolute inset-0 bg-[#2B293D] opacity-50" />
      <div className="text-[48px] text-white font-bold z-10 font-monster tracking-wider">
        <p>Explore a world of events. Find what excites you!</p>
      </div>

      <SearchBarAndSelectOptions />

    </div>
  )
}