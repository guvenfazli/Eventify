interface ComponentProps {
  children: string,
  htmlFor: string,
}

export default function AuthFormLabel({ htmlFor, children }: ComponentProps) {
  return (
    <label htmlFor={htmlFor} className="text-[20px] font-sans text-[#636363] tracking-wider">{children}</label>
  )
}