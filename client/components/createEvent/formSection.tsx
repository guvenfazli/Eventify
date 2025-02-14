interface ComponentProps {
  formSection: string
}
export default function FormSection({ formSection }: ComponentProps) {

  return (
    <div className="flex w-full justify-start items-center px-52 mb-10">
      <p className="font-monster font-medium text-[40px] text-[#2D2C3C]">{formSection}</p>
    </div>
  )
}