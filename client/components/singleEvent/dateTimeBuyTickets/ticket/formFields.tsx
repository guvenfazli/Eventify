interface ComponentProps {
  name: string,
  placeholder: string,
  type: string,
  label?: string
}

export default function FormFields({ name, placeholder, type, label }: ComponentProps) {
  return (
    <>
      <label className="capitalize" htmlFor={name}>{label ? label : name}</label>
      <input required type={type} name={name} placeholder={placeholder} className="w-full border border-[#828282] outline-none rounded-lg p-2 placeholder:text-[#ACACAC]" />
    </>
  )
}