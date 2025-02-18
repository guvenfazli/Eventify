import { useSelector } from "react-redux";
import Image from "next/image";

export default function EventImage() {

  const imageURL = useSelector((state: any) => state.rootReducer.multiFormSlice.imageURL)

  return (
    <div className="flex w-full relative min-h-[570px]">
      <Image src={imageURL} alt="uploadedEventPic" className=" rounded-3xl" style={{backgroundPosition: "center", backgroundSize: "cover"}} />
    </div>
    
  )
}