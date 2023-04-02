import { useState } from 'react'
import './App.css'
import { CredibilitySection } from './components/CredibilitySection'
import { Header } from './components/Header'
import { VideoSection } from './components/VideoSection'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <CredibilitySection></CredibilitySection>
      <VideoSection></VideoSection>
      <Footer></Footer>
    </div>
  )
}

export default App
