interface ComponentProps {
  description: string
}

export default function Description({ description }: ComponentProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-3 text-[#2D2C3C]">
      <p className="text-[36px] font-bold">Description</p>
      <div className="flex items-center justify-start gap-3">
        <p className="text-[24px] font-opensans text-[#5A5A5A] whitespace-pre-line">{description}</p>
      </div>
    </div>
  )
}