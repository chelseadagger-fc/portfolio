import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className="main">
      <Navbar />
      <Hero />
      <Projects />
      {/* <Pitch /> */}
      <Contact />
      {/* <Footer /> */}

    </div>
  )
}

export default App
