import CreateAccountForm from "./createAccountForm"
export default function RegisterSection() {
  return (
    <div className="flex justify-center items-start w-1/2 h-screen">
      <div className="flex flex-col items-center justify-center h-full w-7/12">
        <div className="flex w-full items-center justify-start text-[48px] font-monster text-[#2B293D] font-bold">
          <p>Create Account</p>
        </div>

        <div className="flex w-full items-center justify-startfont-monster">
          <CreateAccountForm />
        </div>
      </div>
    </div>
  )
}