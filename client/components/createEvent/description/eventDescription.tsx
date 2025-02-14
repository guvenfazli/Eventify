import EventFormLabel from "../eventFormLabel"

interface ComponentProps {
  formLabel: string
}

export default function EventDescription({ formLabel }: ComponentProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full gap-5 justify-start items-center">
        <div className="flex w-1/6 items-center justify-end text-nowrap">
          <EventFormLabel htmlFor="title">{formLabel}</EventFormLabel>
        </div>
        <div className="flex gap-3 items-center justify-start w-full">
          <textarea cols={150} rows={100} name="description" id="description"
            className="border border-[#ACACAC] rounded-md px-5 py-2 font-opensans outline-none placeholder:text-[#ACACAC]" 
            placeholder="Please add a small text about the event..."
          />
        </div>
      </div>
    </div>
  )
}