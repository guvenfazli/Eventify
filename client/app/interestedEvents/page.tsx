import CreateEventHeader from "@/components/createEvent/createEventHeader"
import InterestedEventsSection from "@/components/interestedEvents/interestedEventsSection"

export default async function Page() {

  return (
    <div className="flex flex-col justify-start items-start w-full p-12 gap-8">
      <CreateEventHeader header="Interested Events" />

      <div className="flex flex-col justify-start gap-5 px-20 items-start w-full">
        <InterestedEventsSection />
      </div>

    </div>
  )
}

