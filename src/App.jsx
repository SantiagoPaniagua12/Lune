// App.jsx — Punto de entrada de la aplicación Lune Pastelería.
// Ensambla todas las vistas en orden lógico de landing page.

import Navbar from './views/Navbar'
import Hero from './views/Hero'
import About from './views/About'
import Menu from './views/Menu'
import Gallery from './views/Gallery'
import Testimonials from './views/Testimonials'
import ContactSection from './views/ContactSection'
import Footer from './views/Footer'
import LunarBackground from './components/LunarBackground'
import FloatingMoonTracker from './components/FloatingMoonTracker'

function App() {
  return (
    <div className="min-h-screen relative text-slate-100 overflow-x-hidden">
      {/* Fondo astronómico global con la luna animada según el scroll */}
      <LunarBackground />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Gallery />
          <Testimonials />
          <ContactSection />
        </main>
        <Footer />
        <FloatingMoonTracker />
      </div>
    </div>
  )
}

export default App
