import { BaseSyntheticEvent, useState } from "react"
import AuthFormLabel from "../authFormLabel"
import AuthFormInput from "../authFormInput"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { useDispatch } from "react-redux"
import { authActions } from "@/store/slices/authSlice"

interface ErrorType {
  message: string
}

export default function CreateAccountForm() {

  const router = useRouter()
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const dispatch = useDispatch()
  const { toast } = useToast()

  async function createAccount(e: BaseSyntheticEvent) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const fd = Object.fromEntries(formData.entries())
    try {
      setIsRegister(true)
      const response = await fetch('http://localhost:8080/auth/createAccount', {
        method: "POST",
        body: JSON.stringify(fd),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData.message)
        throw error
      }

      const resData = await response.json()
      dispatch(authActions.logIn(resData.loggedAccount))
      toast({
        title: "Success!",
        description: resData.message,
        className: "bg-[#FFE047] text-black"
      })
      router.push('/homePage')
      setIsRegister(false)

    } catch (err: unknown) {
      const requestError = err as ErrorType
      toast({
        title: "Error!",
        description: requestError.message,
        className: "bg-red-700 text-white"
      })
      setIsRegister(false)
    }
  }

  return (
    <form onSubmit={(e) => createAccount(e)} method="POST" className="flex flex-col gap-6 justify-start w-full items-start">

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor={"name"}>Full Name</AuthFormLabel>
        <AuthFormInput name={"name"} placeHolder={"Enter Your Full Name"} type={"text"} />
      </div>

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor={"email"}>E-mail Address</AuthFormLabel>
        <AuthFormInput name={"email"} placeHolder={"Enter Your E-Mail"} type={"email"} />
      </div>

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor={"password"}>Password</AuthFormLabel>
        <AuthFormInput name={"password"} placeHolder={"Password"} type={"password"} />
      </div>

      <div className="flex justify-center items-center w-full">
        <button disabled={isRegister} className="bg-[#2B293D] w-full py-2 text-white text-[24px] font-opensans font-bold rounded-md hover:bg-[#4A4763] duration-75 disabled:bg-[#2B293D]/80">
          {isRegister ? 'Creating Account...' : 'Create Account'}
        </button>
      </div>

      <div className="flex justify-start items-center w-full">
        <p className="text-[20px] text-[#636363] font-opensans mr-3">Already have an account?</p>
        <Link href={'?auth=login'} className="text-[20px] text-[#636363] font-opensans font-semibold hover:underline hover:cursor-pointer">Log In!</Link>
      </div>

    </form>
  )
}