import AuthFormLabel from "../authFormLabel"
import AuthFormInput from "../authFormInput"
import Link from "next/link"
import { BaseSyntheticEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { authActions } from "@/store/slices/authSlice"
import { useToast } from "@/hooks/use-toast"
interface ErrorType {
  message: string
}

export default function LoginForm() {

  const router = useRouter()
  const [isLogging, setIsLogging] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { toast } = useToast()

  async function loginAccount(e: BaseSyntheticEvent) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const fd = Object.fromEntries(formData.entries())
    try {
      setIsLogging(true)
      const response = await fetch('http://localhost:8080/auth/loginAccount', {
        method: "POST",
        body: JSON.stringify(fd),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData.message)
        throw error
      }

      const resData = await response.json()

      toast({
        title: "Success!",
        description: resData.message,
        className: "bg-[#FFE047] text-black"
      })
      router.push('/homePage')
      setIsLogging(false)
      dispatch(authActions.logIn(resData.loggedAccount))

    } catch (err: unknown) {
      const requestError = err as ErrorType
      setIsLogging(false)
      toast({
        title: "Error!",
        description: requestError.message,
        className: "bg-red-700 text-white"
      })

    }
  }

  return (
    <form onSubmit={(e) => loginAccount(e)} method="POST" className="flex flex-col gap-6 justify-start w-full items-start">

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor="email">E-mail Address</AuthFormLabel>
        <AuthFormInput name="email" placeHolder="Enter Your E-Mail" type="email" />
      </div>

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
        <AuthFormInput name="password" placeHolder="Password" type="password" />
      </div>

      <div className="flex justify-center items-center w-full">
        <button disabled={isLogging} className="bg-[#2B293D] w-full py-2 text-white text-[24px] font-opensans font-bold rounded-md hover:bg-[#4A4763] duration-75 disabled:bg-[#2B293D]/80">
          {isLogging ? 'Logging In...' : 'Login'}
        </button>
      </div>

      <div className="flex justify-start items-center w-full">
        <p className="text-[20px] text-[#636363] font-opensans mr-3">Don't have an account?</p>
        <Link href={'?auth=signup'} className="text-[20px] text-[#636363] font-opensans font-semibold hover:underline hover:cursor-pointer">Sign Up!</Link>
      </div>

    </form>
  )
}