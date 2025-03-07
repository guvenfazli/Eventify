import CreateAccountForm from "./createAccountForm"
export default function RegisterSection() {
  return (
    <div className="flex justify-center items-start w-[80%] h-screen bg-white rounded-tl-[100px] rounded-bl-[100px]">

      <div className="flex flex-col items-center justify-center gap-3 h-full w-7/12">
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