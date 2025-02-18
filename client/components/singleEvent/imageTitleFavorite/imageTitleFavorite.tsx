import { IoStar, IoStarOutline } from "react-icons/io5";
interface ComponentProps {
  imageURL: string,
  title: string
}
export default function ImageTitleFavorite({ imageURL, title }: ComponentProps) {

  return (
    <div className="flex flex-col justify-start items-start w-full">
      <div className="flex justify-start items-start min-h-[570px] w-full mb-10 border border-red-700">
        <p>Image section</p>
      </div>

      <div className="flex items-center justify-between w-full">
        <p className="font-extrabold text-[60px] font-opensans text-[#2D2C3C]">{title}</p>
        <button><IoStarOutline className="text-[45px] text-[#2D2C3C]" /></button>
      </div>
    </div>
  )
}