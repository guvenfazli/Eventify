import { useSelector } from "react-redux";
import { CiLocationOn } from "react-icons/ci";

export default function EventLocation() {
  const location = useSelector((state: any) => state.rootReducer.multiFormSlice.location)

  return (
    <div className="flex flex-col items-start justify-start gap-3 text-[#2D2C3C]">
      <p className="text-[36px] font-bold">Location</p>
      <div className="flex items-center justify-start gap-3">
        <CiLocationOn className="text-[24px]" />
        <p className="font-semibold font-opensans text-[24px] text-[#2D2C3C]">{location}</p>
      </div>
    </div>
  )
}