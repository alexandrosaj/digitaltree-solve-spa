import AboutSection from '../components/AboutSection'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import HelpSection from '../components/HelpSection'
import Hero from '../components/Hero'
import RoomsSection from '../components/RoomsSection'
import SolveVisualSection from '../components/SolveVisualSection'
import StoresSection from '../components/StoresSection'

export default function Home() {
  return (
    <main className="bg-page">
      <Hero />
      <FeaturedProducts />
      <AboutSection />
      <SolveVisualSection />
      <RoomsSection />
      <StoresSection />
      <HelpSection />
      <Footer />
    </main>
  )
}
