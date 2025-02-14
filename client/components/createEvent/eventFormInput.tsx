interface ComponentProps {
  placeholder: string,
  name: string
}
export default function EventFormInput({ placeholder, name }: ComponentProps) {
  return (
    <input className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans text-[22px] outline-none placeholder:text-[#ACACAC] w-1/2" placeholder={placeholder} name={name} />
  )
}