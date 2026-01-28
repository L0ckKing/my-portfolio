import { Outlet } from "react-router-dom"
import Background from "@/components/Background"
import Topbar from "../components/Topbar"

export default function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* Persistent background */}


      {/* Persistent topbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Background/>
        <Topbar />

      </div>



      {/* Swappable page content */}
      <main className="pt-[100px] min-h-screen">
        <Outlet />
      </main>



    </div>
  )
}