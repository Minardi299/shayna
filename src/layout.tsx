import { Outlet } from "react-router"
import { CallFab } from "@/components/call-fab"
import { Footer } from "@/components/sections/footer"
import { Navbar } from "@/components/sections/navbar"
import { useReveal } from "@/lib/use-reveal"

export default function SiteLayout() {
  useReveal()
  return (
    <div className="flex min-h-svh flex-col overflow-x-clip">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CallFab />
    </div>
  )
}
