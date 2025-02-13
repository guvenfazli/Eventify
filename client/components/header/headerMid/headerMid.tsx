import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function HeaderMid() {

  const activePath = useSelectedLayoutSegment()

  return (
    <nav className="flex justify-around items-center text-[20px] space-x-10 text-white">
      <Link className={`font-medium tracking-wider ${activePath === "homePage" && 'underline decoration-[#FFE047] decoration-2 font-semibold underline-offset-8'}`} href={'/homePage'}>Home</Link>
      <Link className={`font-medium tracking-wider ${activePath === "events" && 'underline decoration-[#FFE047] decoration-2 font-semibold underline-offset-8'}`} href={'/events'}>Events</Link>
      <Link className={`font-medium tracking-wider ${activePath === "about" && 'underline decoration-[#FFE047] decoration-2 font-semibold underline-offset-8'}`} href={'/about'}>About</Link>
      <Link className={`font-medium tracking-wider ${activePath === "contact" && 'underline decoration-[#FFE047] decoration-2 font-semibold underline-offset-8'}`} href={'/contact'}>Contact</Link>
    </nav>
  )
}