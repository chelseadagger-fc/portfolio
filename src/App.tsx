import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { useEffect, useState } from 'react'

const getGreeting = async function () {
  const res = await fetch("/api/test");
  return await res.json();
};

function App() {

  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    getGreeting().then((res) => setGreeting(res.greeting));
  }, []);

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
