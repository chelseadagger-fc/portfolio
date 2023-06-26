import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {

  return (
    <div className="main">
      <Navbar />
      <Hero />
      {/* <Techstack /> */}
      <Projects />
      {/* <Pitch /> */}
      <Contact />
      {/* <Footer /> */}

    </div>
  )
}