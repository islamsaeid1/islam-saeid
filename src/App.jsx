import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ClientLogos from './components/ClientLogos'
import CaseStudies from './components/CaseStudies'
import MethodSection from './components/MethodSection'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import StickyWhatsApp from './components/StickyWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ClientLogos />
      <CaseStudies />
      <MethodSection />
      <About />
      <Services />
      <Experience />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
      <StickyWhatsApp />
    </div>
  )
}

export default App
