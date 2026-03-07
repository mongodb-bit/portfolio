import heroim from "../assets/kk4.jpeg"
import { TypeAnimation } from "react-type-animation"
import resume from "../assets/new3.pdf"
import ShoalDoodle from "./ShoalDoodle";
export default function Hero() {
  return (
    <section id="home"
      className="
      relative min-h-screen
      flex flex-col-reverse lg:flex-row
      items-center justify-between
      px-6 sm:px-10 lg:px-16
      py-16
      text-white
      bg-gradient-to-br from-[#020617] via-[#0b1a45] to-[#020617]
    "
    >

      
      <div className="relative z-10 max-w-xl text-center lg:text-left">
         <ShoalDoodle repeat interval={12000} minFish={10} maxFish={20} />
        <h1 className="text-4xl sm:text-5xl font-bold">
          Hi, I'm <span className="text-blue-400">Subin</span> 👋
        </h1>

        
        <h2 className="text-xl sm:text-2xl mt-4 text-gray-300">

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "IoT Developer",
              2000,
              "Devops engineer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-400"
          />

        </h2>

        <p className="mt-4 text-gray-400">
          Building scalable web apps & IoT powered systems
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

          <a href="https://github.com/mongodb-bit"
           className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Github
          </a>

<a
href={resume}  
  download                 
  className="border border-gray-500 px-6 py-3 rounded-lg hover:border-blue-400 transition inline-block text-center"
>
  Download Resume
</a>

        </div>

      </div>


<div className="
  relative flex justify-center items-center
  mt-12 lg:mt-0   /* push down on mobile, reset on desktop */
  mb-12 lg:mb-0
  lg:-ml-20
">
 
  <div className="absolute w-[300px] sm:w-[380px] lg:w-[420px] h-[300px] sm:h-[380px] lg:h-[420px] bg-blue-500/30 blur-[120px] rounded-full"></div>

  <img
    src={heroim}
    alt="Subin"
    className="
      relative z-10
      w-[220px] sm:w-[300px] lg:w-[380px]
      rounded-full
      border-4 border-blue-500/30
      shadow-[0_0_60px_rgba(59,130,246,0.5)]
      transition-transform duration-500
      hover:scale-105
    "
  />
</div>

    </section>
  )
}