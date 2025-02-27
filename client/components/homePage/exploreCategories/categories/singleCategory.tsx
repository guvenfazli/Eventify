import Link from "next/link"
interface ComponentProps {
  imageUrl: string,
  category: string,
  title: string
}

export default function SingleCategory({ imageUrl, category, title }: ComponentProps) {
  return (
    <div className="flex w-2/5 min-h-[170px] p-2 flex-col justify-between items-center text-center gap-3">
      <div style={{ backgroundImage: `url('/assets/homePage/categories/${imageUrl}')` }} className={`border border-[#FFE047] min-w-[150px] min-h-[150px] bg-cover rounded-full`} />

      <div className="text-wrap">
        <Link href={`/events?srch=${undefined}&location=${undefined}&category=${category}`} className="font-opensans font-semibold text-[24px] text-[#2D2C3C]">{title}</Link>
      </div>
    </div>
  )
}