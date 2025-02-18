import { useSelector } from "react-redux"
export default function EventCategory() {
  const category = useSelector((state: any) => state.rootReducer.multiFormSlice.category)

  return (


    <div className="flex flex-col items-start justify-start gap-3 text-[#2D2C3C]">
      <p className="text-[36px] font-bold">Category</p>
      <p className="font-semibold font-opensans text-[24px] text-[#2D2C3C] capitalize">{category}</p>
    </div>

  )
}