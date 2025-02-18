export default function Category({ eventCategory }: { eventCategory: string }) {
  return (
    <div className="flex justify-start items-center w-full">
      <button className="bg-[#F8F7FA] text-[18px] font-opensans text-[#2D2C3C] capitalize px-5 py-3 rounded-full cursor-default">{eventCategory}</button>
    </div>
  )
}