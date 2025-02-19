import { useSelector } from "react-redux";
import Image from "next/image";

export default function EventImage() {

  const imageURL = useSelector((state: any) => state.rootReducer.multiFormSlice.imageURL)

  return (
    <div className="flex w-full relative min-h-[570px]">
      <div
        className="absolute blur-sm top-0 right-0 bottom-0 left-0" style={{ background: `url(${imageURL})`, backgroundPosition: "center", backgroundSize: "contain" }} />
      <Image fill src={imageURL} alt="uploadedEventPic" className="rounded-3xl" style={{ objectFit: "contain" }} />
    </div>

  )
}