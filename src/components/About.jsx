export default function About() {
  return (
    <section id="about"
     className="
      relative px-6 sm:px-10 lg:px-16 py-20 text-white
      bg-gradient-to-br from-[#020617] via-[#0b1a45] to-[#020617]
    ">

      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <h2 className="text-3xl font-semibold mb-8">About Me</h2>

        
        <div className="flex flex-col lg:flex-row gap-10">

        
          <p className="text-gray-400 lg:max-w-sm lg:flex-shrink-0">
            I am an Electronics and Communication Engineering student at the
            National Institute of Technology Calicut. My educational journey
            started at GHS Pooyappally, Kollam, and continued through St.
            Antony's HSS, Mutholy. I enjoy building efficient and scalable web
            applications and continuously exploring new technologies.
          </p>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-400 text-sm">React, TailwindCSS, JavaScript</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-400 text-sm">Node.js, Express, JavaScript</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p className="text-gray-400 text-sm">PostgreSQL, MongoDB</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400 transition">
              <h3 className="text-xl font-semibold mb-2">Learning</h3>
              <p className="text-gray-400 text-sm">DevOps, Linux</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400 transition sm:col-span-2">
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <p className="text-gray-400 text-sm">C++, Python, JavaScript</p>
            </div>

          </div>
        </div>

      </div>

    </section>
  )
}