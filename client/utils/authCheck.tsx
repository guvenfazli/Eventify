"use client"
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
interface AuthenticationObject {
  rootReducer: {
    userInfo: {
      userInfo: {
        userId: number,
        name: string,
        isAdmin: boolean
      }
    }
  }
}



export function AuthCheck({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const authInformation = useSelector((state: AuthenticationObject) => state.rootReducer.userInfo.userInfo)
  if (!authInformation) {
    router.push('/')
  }
  return (
    <>
      {children}
    </>
  )
}

export function alreadyLoggedIn() {
  const router = useRouter()
  const authInformation = useSelector((state: AuthenticationObject) => state.rootReducer.userInfo.userInfo)
  if (authInformation) {
    router.push('/homePage')
  }
}