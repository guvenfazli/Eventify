"use client"
import AppSummary from "@/components/authenticationPage/appSummary";
import LoginSection from "@/components/authenticationPage/login/loginSection";
import RegisterSection from "@/components/authenticationPage/register/registerSection";
import { useSearchParams } from "next/navigation";
export default function AuthPage() {

  const searchParams = useSearchParams()
  const authMode = searchParams.get("auth")

  if (!authMode || authMode === "login") {
    return (
      <div className="flex w-full items-start justify-between bg-[#2B293D]">
        <AppSummary />
        <LoginSection />
      </div>
    )
  } else {
    return (
      <div className="flex w-full items-start justify-between bg-[#2B293D]">
        <AppSummary />
        <RegisterSection />
      </div>
    )
  }

}