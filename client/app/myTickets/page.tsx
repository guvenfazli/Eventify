import CreateEventHeader from "@/components/createEvent/createEventHeader"
import TicketList from "@/components/myTickets/ticketList"

export default async function Page() {

  return (
    <div className="flex flex-col justify-start items-start w-full p-12 gap-8">
      <CreateEventHeader header="My Tickets" />
      <TicketList />
    </div>
  )
}

