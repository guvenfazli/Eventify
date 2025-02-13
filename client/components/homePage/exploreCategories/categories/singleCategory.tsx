interface ComponentProps {
  imageUrl: string,
  category: string
}

export default function SingleCategory({ imageUrl, category }: ComponentProps) {
  return (
    <div className="flex w-2/5 min-h-[170px] p-2 border border-red-500 flex-col justify-between items-center text-center">
      <div style={{ backgroundImage: `url('/assets/homePage/categories/${imageUrl}')` }} className={`border border-blue-500 min-w-[150px] min-h-[150px] bg-cover rounded-full`} />


      <div className="text-wrap">
        <p className="font-opensans font-semibold text-[24px] text-[#2D2C3C]">{category}</p>
      </div>
    </div >
  )
}