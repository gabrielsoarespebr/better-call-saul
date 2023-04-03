import './App.css'
import { CredibilitySection } from './components/CredibilitySection'
import { Header } from './components/Header'
import { VideoSection } from './components/VideoSection'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <CredibilitySection></CredibilitySection>
      <VideoSection></VideoSection>
      <Footer></Footer>
      <ScrollProgress></ScrollProgress>
    </div>
  )
}

export default App
