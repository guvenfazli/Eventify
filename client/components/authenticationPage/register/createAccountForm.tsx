import AuthFormLabel from "../authFormLabel"
import AuthFormInput from "../authFormInput"

export default function CreateAccountForm() {
  return (
    <form className="flex flex-col gap-6 justify-start w-full items-start">
      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor="name">Full Name</AuthFormLabel>
        <AuthFormInput name="name" placeHolder="Enter Your Full Name" type="text" />
      </div>

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor="email">E-mail Address</AuthFormLabel>
        <AuthFormInput name="email" placeHolder="Enter Your E-Mail" type="email" />
      </div>

      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor="password">Password</AuthFormLabel>
        <AuthFormInput name="password" placeHolder="Password" type="password" />
      </div>

      <div className="flex justify-center items-center w-full">
        <button className="bg-[#2B293D] w-full py-2 text-white text-[24px] font-opensans font-bold rounded-md">
          Create Account
        </button>
      </div>
    </form>
  )
}