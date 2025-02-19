import FormFields from "./formFields"

interface ComponentProps {
  ticketQ: number,
  ticketPrice: number
}

export default function PaymentForm({ ticketQ, ticketPrice }: ComponentProps) {
  return (
    <form className="flex flex-col gap-4 justify-start items-start w-full bg-white px-5 py-2">
      <FormFields name="fullName" label="Full Name" placeholder="Enter Your Full Name" type="text" />
      <FormFields name="email" placeholder="Enter Your Email" type="email" />
      <FormFields name="phone" label="Phone Number" placeholder="Enter Your Phone Number" type="text" />
      <div className="flex justify-around items-center w-full">
        <p className="text-[20px] font-bold">Ticket Quantity: <span className="text-[#287921]">{ticketQ}</span></p>
        <p className="text-[20px] font-bold">Total Price: <span className="text-[#287921]">{ticketQ * ticketPrice} <span className="text-sm text-[#2D2C3C]">EUR</span></span></p>
      </div>
    </form>
  )
}