import TagCard from "@/components/homePage/eventCard/eventCardTop/tagCard"
export default function CardLeft() {
  return (
    <div className="flex w-1/3 rounded-tl-lg rounded-tr-lg rounded-br-lg min-h-[208px] relative bg-[url('http://localhost:8080/eventImages/1739945730235-gj.jpg')] bg-center bg-cover">
      <TagCard eventTag={"Entertainment"} />
    </div>
  )
}