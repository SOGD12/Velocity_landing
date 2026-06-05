import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Specs from './components/Specs'
import LightAdaptation from './components/LightAdaptation'
import InTheBox from './components/InTheBox'
import Catalog from './components/Catalog'
import Reviews from './components/Reviews'
import Sports from './components/Sports'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Specs />
      <LightAdaptation />
      <InTheBox />
      <Catalog />
      <Reviews />
      <Sports />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
