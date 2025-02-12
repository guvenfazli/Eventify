import AuthFormLabel from "../authFormLabel"
import AuthFormInput from "../authFormInput"
import Link from "next/link"
import { BaseSyntheticEvent } from "react"

interface ErrorType {
  message: string
}

export default function LoginForm() {

  async function loginAccount(e: BaseSyntheticEvent) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const fd = Object.fromEntries(formData.entries())
    try {

      const response = await fetch('http://localhost:8080/auth/loginAccount', {
        method: "POST",
        body: JSON.stringify(fd),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData)
        throw error
      }

      const resData = await response.json()
      console.log(resData)

    } catch (err: unknown) {
      const requestError = err as ErrorType
      console.log(requestError.message)
    }
  }

  return (
    <form onSubmit={(e) => loginAccount} method="POST" className="flex flex-col gap-6 justify-start w-full items-start">

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor="email">E-mail Address</AuthFormLabel>
        <AuthFormInput name="email" placeHolder="Enter Your E-Mail" type="email" />
      </div>

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
        <AuthFormInput name="password" placeHolder="Password" type="password" />
      </div>

      <div className="flex justify-center items-center w-full">
        <button className="bg-[#2B293D] w-full py-2 text-white text-[24px] font-opensans font-bold rounded-md hover:bg-[#4A4763] duration-75">
          Login
        </button>
      </div>

      <div className="flex justify-start items-center w-full">
        <p className="text-[20px] text-[#636363] font-opensans mr-3">Don't have an account?</p>
        <Link href={'?auth=signup'} className="text-[20px] text-[#636363] font-opensans font-semibold hover:underline hover:cursor-pointer">Sign Up!</Link>
      </div>

    </form>
  )
}