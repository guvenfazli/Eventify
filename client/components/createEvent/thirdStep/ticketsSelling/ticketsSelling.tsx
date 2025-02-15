import TicketInfos from "./ticketInfos.tsx/ticketInfos"

export default function TicketsSelling() {
  return (
    <div className="flex gap-3 items-center justify-start w-full mb-10">
      <TicketInfos htmlFor="ticketQuantity" inputType="text" label="Quantity" name="ticketQuantity" placeHolder="50.000" />
      <TicketInfos htmlFor="ticketPrice" inputType="text" label="Price (EUR)" name="ticketPrice" placeHolder="19.99" />
    </div>
  )
}