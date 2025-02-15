import { useSelector } from "react-redux"

export default function EventTitle() {
  
  const title = useSelector((state: any) => state.rootReducer.multiFormSlice.title) 
  
  return (
    <p className="text-[68px] font-extrabold font-opensans text-[#2D2C3C]">{title}</p>
  )
}