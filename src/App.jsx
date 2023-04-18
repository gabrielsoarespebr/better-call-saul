import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { About } from './components/About'
import { Credibility } from './components/Credibility'
import { Attest } from './components/Attest'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Credibility></Credibility>
      <About></About>
      <Attest></Attest>
      <Footer></Footer>
      <ScrollProgress></ScrollProgress>
    </div>
  )
}

export default App
