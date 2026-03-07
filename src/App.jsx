import Particles from "./components/Particles"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects";
import   fish from  "./components/ShoalDoodle"
export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden ">

    
      <div className="absolute inset-0 z-20 pointer-events-none">
  <Particles
    particleColors={["#061356"]}
    particleCount={1000}
    particleSpread={20}
    speed={0.7}
    particleBaseSize={200}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation
    pixelRatio={1}
/>
    <fish minFish={3} maxFish={10} delay={500} zIndex={9999} />
      </div>

     
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About/>
        <Projects />
        <Contact/>
        
      </div>

    </div>
  )
}<fish/>