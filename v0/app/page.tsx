import type React from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import "../styles/globals.css"

const HomePage: React.FC = () => {
  return (
    <div className="container min-h-screen bg-[#fff1da]">
      <Header />
      <HeroSection />
    </div>
  )
}

export default HomePage
