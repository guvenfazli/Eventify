interface ComponentProps {
  htmlFor: string,
  children: string
}
export default function EventFormLabel({ htmlFor, children }: ComponentProps) {
  return (
    <label className="font-opensans font-semibold text-[24px] text-[#2D2C3C] text-right" htmlFor={htmlFor}>{children} <span className="text-[#D6111A]">*</span></label>
  )
}