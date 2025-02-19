import FormFields from "./formFields"
export default function PaymentForm() {
  return (
    <form className="flex flex-col gap-4 justify-start items-start w-full bg-white px-5 py-2">
      <FormFields name="fullName" label="Full Name" placeholder="Enter Your Full Name" type="text" />
      <FormFields name="email" placeholder="Enter Your Email" type="email" />
      <FormFields name="phoneNumber" label="Phone Number" placeholder="Enter Your Phone Number" type="text" />

    </form>
  )
}