import Categories from "./categories/categories"
export default function ExploreCategories() {
  return (
    <div className="flex flex-col justify-start items-start py-12 gap-2 w-full">
      <div>
        <p className="font-monster text-[40px] font-bold text-[#2D2C3C] tracking-wide">Explore Categories</p>
      </div>

      <Categories />
    </div>
  )
}