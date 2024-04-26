import Header from "./components/header"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Navigation from "./components/navigation"
import Profile from "./components/profile"
import Portfolio from "./components/portfolio"
import Footer from "./components/footer"
import Banner from "./components/banner"

function App() {
  useEffect(() => {
    AOS.init()
  })
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Profile />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
