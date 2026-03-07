import { Link } from 'react-scroll';

export default function Navbar() {
  return (
  <nav className="
  fixed top-0 w-full z-50
  flex justify-between items-center
  px-4 md:px-12 py-2 md:py-4   /* slimmer padding */
  text-white
  bg-gradient-to-r from-[#020617] via-[#0b1a45] to-[#020617]
  backdrop-blur-md
">
  
  <div className="flex flex-col gap-1 cursor-pointer">
    <Link
      to="home"
      smooth={true}
      duration={500}
      className="text-lg md:text-xl font-bold text-blue-400 transform transition-transform duration-300 hover:scale-105"
    >
      Subin.dev
    </Link>
    <p className="text-xs md:text-sm text-gray-300 uppercase tracking-wider animate-pulse">
      Build. Ship. Scale. Repeat.
    </p>
  </div>

  
  <ul className="flex gap-3 md:gap-6 text-xs md:text-sm text-gray-300">
    <li>
      <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
        About
      </Link>
    </li>
    <li>
      <Link to="projects" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
        Projects
      </Link>
    </li>
    <li>
      <Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer">
        Contact
      </Link>
    </li>
  </ul>
</nav>
  )
}