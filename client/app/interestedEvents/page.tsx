import { cookies } from "next/headers"
import CreateEventHeader from "@/components/createEvent/createEventHeader"
import InterestedEventsSection from "@/components/interestedEvents/interestedEventsSection"

interface ErrorType {
  message: string
}


export default async function Page() {

  const cookieStore = cookies()
  const myCookie = (await cookieStore).get('connect.sid')

  try {

    const response = await fetch('http://localhost:8080/interestedEvents?filter=title&direction=DESC', {
      headers: { Cookie: `connect.sid=${myCookie!.value}` },
      credentials: "include"
    })

    if (!response.ok) {
      const resData = await response.json()
      const error = new Error(resData.message)
      throw error
    }

    const resData = await response.json()

    return (
      <div className="flex flex-col justify-start items-start w-full p-12">
        <CreateEventHeader header="Interested Events" />

        <div className="flex flex-col justify-start gap-5 px-20 items-start w-full">
          <InterestedEventsSection interestedEvents={resData.interestedEvents} />
          {/*         <div className="flex w-full justify-center items-center">
            <button onClick={() => setPage(prev => prev += 6)}
              className="w-1/3 py-3 rounded-md text-[#2B293D] border-2 border-[#2B293D] font-opensans font-semibold text-[24px] hover:bg-[#2B293D] hover:text-white duration-150 ease-in-out">
              See More
            </button>
          </div> */}
        </div>

      </div>
    )
  } catch (err: unknown) {
    const error = err as ErrorType

    return (
      <div className="flex flex-col justify-start items-start w-full p-12">
        <CreateEventHeader header="Interested Events" />

        <div className="flex flex-col justify-start gap-5 px-20 items-start w-full">
          <p>You do not have any events in your interest.</p>
        </div>

      </div>
    )

  }










}