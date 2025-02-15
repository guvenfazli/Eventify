interface ComponentProps {
  label: string
  htmlFor: string,
  inputType: string,
  name: string,
  placeHolder?: string
}

export default function TicketInfos({ label, htmlFor, inputType, name, placeHolder }: ComponentProps) {
  return (
    <div className="flex flex-col justify-start items-start">
      <label className="font-opensans font-semibold text-[20px] text-[#2D2C3C]" htmlFor={htmlFor}>{label}</label>
      <input className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC]" placeholder={placeHolder} type={inputType} name={name} />
    </div>
  )
}