"use client"
import HeaderLeft from "./headerLeft/headerLeft"
import HeaderMid from "./headerMid/headerMid"
import HeaderRight from "./headerRight/headerRight"
import { useSelector } from "react-redux"

interface AuthenticationObject {
  rootReducer: {
    userInfo: {
      isLogged: boolean,
      userInfo: {
        userId: number,
        name: string,
        isAdmin: boolean
      }
    }
  }
}


export default function Header() {

  const authInformation = useSelector((state: AuthenticationObject) => state.rootReducer.userInfo)
  console.log(authInformation)
  if (authInformation.isLogged) {
    return (
      <header className="flex items-center justify-between px-10 py-1 bg-[#2B293D] shadow-md">
        <HeaderLeft />
        <HeaderMid />
        <HeaderRight />
      </header>
    )
  }
}