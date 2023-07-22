import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Techstack from './components/Techstack'
// import HireMe from  './components/HireMe'

export default function App() {

  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Techstack />
      <Projects />
      {/* <HireMe /> */}
      <Contact />
      <Footer />

    </div>
  )
}