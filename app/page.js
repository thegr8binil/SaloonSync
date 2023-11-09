import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import MFeatures from "@/components/MFeatures"
import { Bar } from "@/components/Bar"
import M2Features from "@/components/M2Features"
export default function Home() {
  return (
   <main className="flex items-center justify-center flex-col gap-14">
    <NavBar/>
    <HeroSection/>
    <Features/>
    <MFeatures/>
    <Bar/>
    <M2Features/>
   </main>
  )
}
