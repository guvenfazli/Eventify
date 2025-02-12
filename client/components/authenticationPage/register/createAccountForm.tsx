import AuthFormLabel from "../authFormLabel"
import AuthFormInput from "../authFormInput"

export default function CreateAccountForm() {
  return (
    <form className="flex flex-col justify-start w-full items-start">
      <div className="flex flex-col w-full gap-2">
        <AuthFormLabel htmlFor="name">Full Name</AuthFormLabel>
        <AuthFormInput name="name" placeHolder="Enter Your Full Name" type="text"/>
      </div>
    </form>
  )
}