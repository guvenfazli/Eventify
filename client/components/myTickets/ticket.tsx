interface ErrorType {
  message: string
}

export default function Ticket({ ticket }: any) {

  console.log(ticket)
  async function getInvoice() {
    try {
      const response = await fetch(`http://localhost:8080/getInvoice/${ticket.userTicket.id}`, {
        credentials: "include"
      })

      if (!response.ok) {
        const resData = await response.json()
        const error = new Error(resData.message)
        throw error
      }

      const resData = await response.blob()
      const invoiceLink = URL.createObjectURL(resData)
      window.open(invoiceLink, "_blank")

    } catch (err: unknown) {
      const error = err as ErrorType
      console.log(error.message)
    }

  }

  return (
    <div onClick={getInvoice} className="flex flex-col w-full relative gap-5 border-t-8 border-t-[#4872C6] bg-[#F1F3F6] p-5 rounded-xl shadow-lg hover:cursor-pointer hover:bg-[#E1E5EA] duration-100 ease-in">

      <div className="w-20 h-20 bg-white absolute -left-[50px] top-[50px] rounded-full hover:pointer-events-none" />
      <div className="w-20 h-20 bg-white absolute -right-[50px] top-[50px] rounded-full hover:pointer-events-none" />

      <div className="w-full flex justify-center items-center text-center">
        <p className="text-[32px] text-[#4872C6] font-semibold font-opensans">{ticket.title}</p>
      </div>

      <div className="flex justify-between items-center w-full px-14">
        <div className="flex flex-col justify-start items-start text-[20px] font-semibold font-opensans text-[#2D2C3C]">
          <p>{ticket.userTicket.fullName}</p>
          <p>{ticket.userTicket.email}</p>
        </div>

        <div className="bg-[#4872C6] text-white text-[20px] font-semibold font-opensans px-8 py-2 rounded-lg shadow-md">
          <p>{ticket.userTicket.totalPrice} <span className="text-sm">eur</span></p>
        </div>
      </div>

    </div>
  )
}