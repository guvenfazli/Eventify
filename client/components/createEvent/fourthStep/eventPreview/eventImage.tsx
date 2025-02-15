import { useSelector } from "react-redux";
import Image from "next/image";

export default function EventImage() {

  const imageURL = useSelector((state: any) => state.rootReducer.multiFormSlice.imageURL)

  return (
    <div className="flex w-full relative min-h-[570px] border border-red-700">
      <p>Will be picture here</p>
      <Image fill src={imageURL} alt="uploadedEventPic" />
    </div>
    
  )
}