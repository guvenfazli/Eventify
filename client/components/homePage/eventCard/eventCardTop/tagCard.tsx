interface ComponenProps {
  eventTag: string
}
export default function TagCard({ eventTag }: ComponenProps) {
  return (
    <div className="text-center absolute left-0 bottom-0 px-5 py-1 rounded-tr-md rounded bg-[#FFE047]">
      <p className="text-[#2D2C3C] font-semibold text-[18px] font-opensans">{eventTag}</p>
    </div>
  )
}