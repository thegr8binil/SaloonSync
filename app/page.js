import NavBar from "@/components/NavBar"
import HeroSection from "@/components/HeroSection"
import Features from "@/components/Features"
import MFeatures from "@/components/MFeatures"
export default function Home() {
  return (
   <main className="flex items-center justify-center flex-col">
    <NavBar/>
    <HeroSection/>
    <Features/>
    <MFeatures/>
   </main>
  )
}
