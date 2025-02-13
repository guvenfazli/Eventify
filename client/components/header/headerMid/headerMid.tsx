import Link from "next/link";

export default function HeaderMid() {
  return (
    <nav className="flex justify-around items-center text-[20px] space-x-10 text-white">
      <Link className="font-semibold tracking-wider" href={'/homePage'}>Home</Link>
      <Link className="font-medium tracking-wider" href={'/events'}>Events</Link>
      <Link className="font-medium tracking-wider" href={'/about'}>About</Link>
      <Link className="font-medium tracking-wider" href={'/contact'}>Contact</Link>
    </nav>
  )
}