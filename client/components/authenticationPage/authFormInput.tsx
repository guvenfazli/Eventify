interface ComponentProps {
  type: string,
  placeHolder: string,
  name: string
}

export default function AuthFormInput({ type, placeHolder, name }: ComponentProps) {
  return (
    <input className="p-4 border text-[19px] rounded-md border-[#636363] w-full outline-none " type={type} placeholder={placeHolder} name={name} required />
  )
}