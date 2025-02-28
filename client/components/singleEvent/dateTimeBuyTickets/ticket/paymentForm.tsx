import { BaseSyntheticEvent, useState } from "react"
import { useToast } from "@/hooks/use-toast"
import FormFields from "./formFields"

interface ErrorType {
  message: string
}

interface ComponentProps {
  ticketQ: number,
  ticketPrice: number,
  ticketId: string
}

export default function PaymentForm({ ticketQ, ticketPrice, ticketId }: ComponentProps) {

  const [isBuying, setIsBuying] = useState<boolean>(false)
  const { toast } = useToast()
  async function buyTicket(e: BaseSyntheticEvent) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget as HTMLFormElement)

    fd.append("ticketQuantity", `${ticketQ}`)
    fd.append("totalPrice", `${ticketQ * ticketPrice}`)

    try {
      setIsBuying(true)
      const response = await fetch(`http://localhost:8080/buyTicket/${ticketId}`, {
        method: "POST",
        credentials: "include",
        body: fd
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
      setIsBuying(false)
    } catch (err: unknown) {
      const error = err as ErrorType
      setIsBuying(false)
      toast({
        title: "Error!",
        description: error.message,
        className: "bg-red-700 text-white"
      })
    }
  }

  return (
    <form onSubmit={(e) => buyTicket(e)} className="flex flex-col gap-4 justify-start items-start w-full bg-white px-5 py-2">
      <FormFields name="fullName" label="Full Name" placeholder="Enter Your Full Name" type="text" />
      <FormFields name="email" placeholder="Enter Your Email" type="email" />
      <FormFields name="phone" label="Phone Number" placeholder="Enter Your Phone Number" type="text" />
      <div className="flex justify-around items-center w-full">
        <p className="text-[20px] font-bold">Ticket Quantity: <span className="text-[#287921]">{ticketQ}</span></p>
        <p className="text-[20px] font-bold">Total Price: <span className="text-[#287921]">{ticketQ * ticketPrice} <span className="text-sm text-[#2D2C3C]">EUR</span></span></p>
      </div>

      <div className="flex w-full justify-center items-center">
        <button disabled={ticketQ === 0 || isBuying} type="submit"
          className="bg-[#FFE047] font-opensans text-[#2B293D] font-semibold rounded-lg py-2 w-full hover:text-[#2B293D]/50 hover:bg-[#FFE047]/50 duration-100 disabled:bg-[#FFE047]/50 disabled:text-[#2B293D]/50">{!isBuying ? 'Buy' : 'Processing'}</button>
      </div>
    </form>
  )
}