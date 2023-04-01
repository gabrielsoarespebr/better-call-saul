import { useState } from 'react'
import './App.css'
import { CredibilitySection } from './components/CredibilitySection'
import { Header } from './components/Header'
import { VideoSection } from './components/VideoSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <CredibilitySection></CredibilitySection>
      <VideoSection></VideoSection>
    </div>
  )
}

export default App
