import { Checkbox } from "@/components/ui/checkbox"


export default function CategoryFilter() {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-5 border-b pb-5 border-b-[#6F6F6F]/30">
      <p className="text-[24px] font-semibold font-opensans text-[#2D2C3C]">Price</p>
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-3">
          <Checkbox id="travel" />
          <label htmlFor="travel" className="text-[20px] font-opensans text-[#2B293D]">Travel</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="entertainment" />
          <label htmlFor="entertainment" className="text-[20px] font-opensans text-[#2B293D]">Entertainment</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="art" />
          <label htmlFor="art" className="text-[20px] font-opensans text-[#2B293D]">Art</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="sport" />
          <label htmlFor="sport" className="text-[20px] font-opensans text-[#2B293D]">Sports</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="business" />
          <label htmlFor="business" className="text-[20px] font-opensans text-[#2B293D]">Business</label>
        </div>

        <div className="flex justify-start items-center gap-3">
          <Checkbox id="tech" />
          <label htmlFor="tech" className="text-[20px] font-opensans text-[#2B293D]">Technology</label>
        </div>
      </div>
    </div>
  )
}
