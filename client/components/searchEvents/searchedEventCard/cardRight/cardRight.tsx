import { IoTicket } from "react-icons/io5";


export default function CardRight() {
  return (
    <div className="flex flex-col justify-around items-start h-full py-2">
      <p className="text-[24px] font-semibold text-[#2D2C3C] font-opensans">Oasis Concert</p>
      <p className="text-[20px] font-bold text-[#5A5A5A] font-opensans">Feb 23 - Feb 23 | United Kingdom</p>
      <p className="text-[20px] text-[#5A5A5A] font-opensans">19:00 - 23:30</p>

      <div className="flex gap-1 items-center justify-start">
        <IoTicket className="text-[#287921] inline-block text-lg" />
        <p className="text-[20px] text-[#287921] font-opensans font-semibold">60 <span className="text-sm">eur</span></p>
      </div>

    </div>
  )
}