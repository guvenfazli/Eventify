import TicketInfos from "./ticketInfos.tsx/ticketInfos"

export default function TicketsSelling() {
  return (
    <div className="flex gap-3 items-center justify-start w-full mb-10">
      <TicketInfos htmlFor="quantity" inputType="text" label="Quantity" name="quantity" placeHolder="50.000" />
      <TicketInfos htmlFor="price" inputType="text" label="Price (EUR)" name="price" placeHolder="19.99" />
    </div>
  )
}