import Link from "next/link"
interface ComponentProps {
  imageUrl: string,
  category: string
}

export default function SingleCategory({ imageUrl, category }: ComponentProps) {
  return (
    <div className="flex w-2/5 min-h-[170px] p-2 flex-col justify-between items-center text-center gap-3">
      <div style={{ backgroundImage: `url('/assets/homePage/categories/${imageUrl}')` }} className={`border border-[#FFE047] min-w-[150px] min-h-[150px] bg-cover rounded-full`} />


      <div className="text-wrap">
        <Link href={`/results/${category}`} className="font-opensans font-semibold text-[24px] text-[#2D2C3C]">{category}</Link>
      </div>
    </div>
  )
}