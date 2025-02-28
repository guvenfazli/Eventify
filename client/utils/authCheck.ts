"use client"
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
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

export function authCheck() {
  const router = useRouter()
  const { toast } = useToast()
  const authInformation = useSelector((state: AuthenticationObject) => state.rootReducer.userInfo.userInfo)
  if (!authInformation) {
    router.push('/')
    toast({
      title: "Error!",
      description: "Please log in first!",
      className: "bg-red-700 text-white"
    })
  }
}

export function alreadyLoggedIn() {
  const router = useRouter()
  const authInformation = useSelector((state: AuthenticationObject) => state.rootReducer.userInfo.userInfo)
  if (authInformation) {
    router.push('/homePage')
  }
}