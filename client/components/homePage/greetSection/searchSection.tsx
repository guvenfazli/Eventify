export default function SearchSection() {
  return (
    <div className="flex items-center justify-center z-10 w-full">
      <div className="flex w-1/2">
        <input className="w-full p-3 py-5 outline-none font-monster text-[20px] rounded-lg" placeholder="Search Events, Categories, Locations..." />
      </div>
    </div>
  )
}