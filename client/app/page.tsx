import AppSummary from "@/components/authenticationPage/appSummary";
import RegisterSection from "@/components/authenticationPage/register/registerSection";
export default function Home() {
  return (
    <div className="flex w-full items-start justify-between">
      <div className="flex flex-col justify-start items-start w-1/2 h-screen bg-[#2B293D]">
        <div className="flex w-full justify-start items-start p-4">
          <p className="font-logo text-[42px] text-[#FFE047]">Eventify</p>
        </div>

        <div className="flex items-center justify-center w-full h-1/2">
          <div className="text-[48px] text-white items-start flex flex-col font-bold font-monster">
            <p>Discover tailored <br /> events.</p>
            <p>
              Sign up for personalized <br /> recommendations <br /> today!
            </p>
          </div>
        </div>
      </div>

      <RegisterSection />

    </div>
  );
}
