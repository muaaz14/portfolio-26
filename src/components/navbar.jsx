import '../App.css'


function Navbar() {
  return (
    <nav className="w-full py-6 px-[32px] flex items-center justify-between">
      <span className="text-[12px] font-normal tracking-[0.05em]">
        Muaaaz.
      </span>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <a href="#home" className="nav-link text-[12px] w-10 font-bold tracking-[0.0125em] text-[#000]">
          Home
        </a>
        <a href="#work" className="nav-link text-[12px] w-10 font-normal tracking-[0.0125em] text-[#000]">
          Work
        </a>
        <a href="#about" className="nav-link text-[12px] w-10 font-normal tracking-[0.0125em] text-[#000]">
          About
        </a>
        <a href="#resume" className="nav-link text-[12px] font-normal tracking-[0.0125em] text-[#000]">
          Download Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar
