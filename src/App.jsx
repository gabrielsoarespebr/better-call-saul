import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { About } from './components/About'
import { Credibility } from './components/Credibility'
import { Attest } from './components/Attest'
import { Gallery } from './components/Gallery'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <Credibility />
      <About />
      <Attest />
      <Contact />
      <Gallery />
      <Footer />
      <ScrollProgress />
    </div>
  )
}

export default App
