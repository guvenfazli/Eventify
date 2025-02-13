import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import Link from "next/link"
import { useRouter } from "next/navigation";
import { IoTicketOutline, IoStarOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "@/store/slices/authSlice";

interface ErrorType {
  message: string
}

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

export default function HeaderRight() {

  const router = useRouter()
  const authInformation = useSelector((state: AuthenticationObject) => state.rootReducer.userInfo.userInfo)
  const dispatch = useDispatch()

  async function logOut() {
    try {
      const response = await fetch('http://localhost:8080/auth/logOut', {
        method: "POST",
        credentials: "include"
      })

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData)
        throw error
      }

      const resData = await response.json()
      dispatch(authActions.logOut())
      router.push('/')

    } catch (err: unknown) {
      const error = err as ErrorType
      console.log(error.message)
    }
  }

  return (
    <nav className="flex justify-around items-center text-[20px] gap-5 text-white">
      <Link href={'/createEvent'} className="font-medium">Create Event</Link>
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Link href={'/tickets'}>
              <IoTicketOutline className="text-[#FFE047]" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Tickets</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger>
            <Link href={'/interested'}>
              <IoStarOutline className="text-[#FFE047]" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Interested</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <button onClick={logOut} className="font-medium">Log Out</button>
    </nav >
  )
}