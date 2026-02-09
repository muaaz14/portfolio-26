function Navbar() {
  return (
    <nav className="w-full py-6 px-[32px] flex items-center justify-between">
      <span className="text-[12px] font-normal tracking-[0.05em]">
        Muaaaz.
      </span>

      {/* Navigation Links */}
      <div className="flex items-center gap-4">
        <a href="#home" className="text-[12px] font-normal tracking-[0.05em] text-[#000] hover:opacity-80 transition">
          Home
        </a>
        <a href="#work" className="text-[12px] font-normal tracking-[0.05em] text-[#000] hover:opacity-80 transition">
          Work
        </a>
        <a href="#about" className="text-[12px] font-normal tracking-[0.05em] text-[#000] hover:opacity-80 transition">
          About
        </a>
        <a href="#resume" className="text-[12px] font-normal tracking-[0.05em] text-[#000] hover:opacity-80 transition">
          Download Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar
