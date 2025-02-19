import { useState } from "react"
import PaymentForm from "./paymentForm"

interface ComponentProps {
  isProceed: boolean
}

export default function Ticket({ isProceed }: ComponentProps) {

  const [ticketQ, setTicketQ] = useState<number>(0)

  return (
    <div className="flex flex-col gap-3 justify-start items-start text-[#2D2C3C] font-opensans p-4">
      <div className="flex w-full items-center justify-start text-[16px] font-semibold px-4">
        <p>{!isProceed ? 'Ticket Type' : 'Payment'}</p>
      </div>

      <div className={`flex justify-between items-center w-full overflow-hidden border-l-8 border-l-[#287921] text-[24px] py-4 px-2 bg-white border border-[#A9A9A9]/50 ${isProceed && 'py-0 px-0 border-none h-0'}`}>
        <div className="flex flex-col justify-start items-start">
          <p className="font-semibold">Standart Ticket</p>
          <p className="text-lg">200 EUR</p>
        </div>

        <div className="flex items-center justify-start gap-3">
          {ticketQ !== 0 && <button disabled={ticketQ === 0} onClick={() => setTicketQ(prev => prev -= 1)}> - </button>}
          <p className="text-[24px] font-semibold">{ticketQ}</p>
          <button onClick={() => setTicketQ(prev => prev += 1)}> + </button>
        </div>
      </div>

      <div className={`flex justify-between items-center w-full duration-100 border-t-2 border-t-[#4872C6] text-[20px] py-4 px-2 bg-white border border-[#A9A9A9]/50 overflow-hidden ${!isProceed && 'py-0 px-0 border-none h-0'}`}>
        <PaymentForm ticketQ={ticketQ} />
      </div>


    </div>
  )
}