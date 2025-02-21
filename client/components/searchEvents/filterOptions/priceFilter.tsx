import { Checkbox } from "@/components/ui/checkbox"

export default function PriceFilter() {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-5 border-b pb-5 border-b-[#6F6F6F]/30">
      <p className="text-[24px] font-semibold font-opensans text-[#2D2C3C]">Price</p>
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-3">
          <Checkbox id="free" />
          <label htmlFor="free" className="text-[20px] font-opensans text-[#2B293D]">Free</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="paid" />
          <label htmlFor="paid" className="text-[20px] font-opensans text-[#2B293D]">Paid</label>
        </div>
      </div>
    </div>
  )
}