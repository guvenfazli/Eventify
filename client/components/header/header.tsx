import HeaderLeft from "./headerLeft/headerLeft"
import HeaderMid from "./headerMid/headerMid"
import HeaderRight from "./headerRight/headerRight"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-1 bg-[#2B293D] shadow-md">
      <HeaderLeft />
      <HeaderMid />
      <HeaderRight />
    </header>
  )
}