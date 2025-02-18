import dayjs from "dayjs";
import { CiCalendarDate, CiClock1 } from "react-icons/ci";
import { useSelector } from "react-redux";


export default function EventDateTime() {

  const multiStepValues = useSelector((state: any) => state.rootReducer.multiFormSlice)
  console.log(multiStepValues)
  return (
    <div className="flex flex-col items-start justify-start text-[#2D2C3C] font-opensans">
      <p className="text-[36px] font-bold">Date and Time</p>

      <div className="flex items-center justify-start gap-3">
        <CiCalendarDate className="text-[30px] font-semibold" />
        <p className="font-semibold text-[24px]">{dayjs.unix(multiStepValues.startDate).format("DD/MM/YY")}</p>
        {multiStepValues.endDate && <p className="font-semibold text-[24px]">- {dayjs.unix(multiStepValues.endDate).format('DD/MM/YY')}</p>}
      </div>

      <div className="flex items-center justify-start gap-3">
        <CiClock1 className="text-[30px]" />
        <p className="font-semibold text-[24px]">{dayjs.unix(multiStepValues.startDate).format('HH')} : {dayjs.unix(multiStepValues.startDate).format('mm')} </p>
        {multiStepValues.endDate && <p className="font-semibold text-[24px]">- {dayjs.unix(multiStepValues.endDate).format('HH')} : {dayjs.unix(multiStepValues.endDate).format('mm')}</p>}

      </div>
    </div>
  )
}