import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Navbar from "./components/Navbar"
import './App.css'



function App() {

  const TOTAL_ITEMS = 4;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_ITEMS);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };


  return (
    <div className="min-h-screen bg-white text-gray-900 font-manrope main px-6 w-full">
      <Navbar />
      <div className="hero flex flex-col rounded-xl items-center justify-center content-center text-center min-w-full gap-[20px] bg-[#FCFBF7] min-w-7xl">

        <img
          src="/src/assets/images/my-photo.png"
          alt="My Photo"
          className="w-20 h-20 rounded-lg object-cover"
        />

        <div className="flex flex-col">
          <h6 className="text-[16px] font-normal leading-[28px] tracking-[0.025em] text-black-900">
            Designing experiences that feel
          </h6>

          <h4 className="text-[20px] font-bold leading-[32px] tracking-[0.025em]">
            Simple, Human, <span className="font-normal">&</span> Intentional.
          </h4>
        </div>

        

        <p className="text-[14px] font-normal leading-[28px] tracking-[0.05em]  text-black-800">
          UX Designer focused on clarity and real user problems.
        </p>

        <p className="text-[14px] font-normal leading-[28px] text-black-800 tracking-[0.05em] max-w-xl">
          I’m Muaaz. I turn complex ideas into meaningful digital experiences through research, thoughtful design, and attention to detail.
        </p>

        <div className="flex flex-row gap-[20px] mt-4">
          <button className="px-4 py-2 border bg-black-900 text-white rounded-md text-[14px] font-medium hover:font-semibold hover:border-black-900 flex items-center gap-2">
            View My Work
            <FiArrowRight size={16} />
          </button>

          <button className="px-4 py-2 border border-gray-900 rounded-md text-[14px] font-medium hover:bg-gray-900 hover:text-white hover:border-black-900 transition">
            Download Resume
          </button>
        </div>

      </div>

      <div className="work py-[48px] flex flex-col gap-[48px]">
        <div className="work-header flex flex-col items-center justify-center content-center text-center gap-[20px]">
          <div className="eye-brow px-[12px] py-[10px] rounded-md">
            <p className="text-[12px] font-normal leading-[12px] tracking-[0.05em] text-black-900">Selected Work</p>
          </div>
          <h5 className="text-[18px] font-normal leading-[25px] tracking-[2%]"> <span className="font-semibold">Designing solutions</span>, not just screens.</h5>
          <p className="text-[14px] font-normal leading-[28px] text-black-900 tracking-[0.0125em] max-w-xl">
            Each project reflects my process — understanding users, exploring ideas, and crafting experiences that are both useful and delightful.
          </p>
        </div>
        <div className="work-section grid grid-cols-3 gap-3 p-6">
          <div className="work-list flex col-span-1 flex-col gap-3 ">
            <div onClick={() => handleItemClick(0)} className={`work-listing cursor-pointer transition-all flex flex-col items-start gap-3 p-4 project-info max-w-[600px] rounded-lg w-full ${activeIndex === 0 ? "work-active" : ""}`}>
                <div className="flex flex-col gap-1">
                  <h6 className="font-normal text-[16px] text-left leading-[20px] tracking-[0.025em] text-black-900">CubiLock</h6>
                  <p className="font-semibold text-[10px] text-left leading-[12px] tracking-[0.05em] text-black-800">B2B DEVICE MANAGEMENT PLATFORM</p>
                </div>
              <p className="text-[12px] text-left font-light leading-[24px] tracking-[0.05em] text-black-80">A centralized platform for large-scale device rental clients to monitor, track, and manage fleets through geofencing, data usage insights, and a dynamic dashboard.</p>
              <div className="flex flex-row gap-2 items-center"> 
                <a href="#" className={`text-[12px] font-medium text-black-900 underline transition-all ${activeIndex === 0 ? "block" : "hidden"}`}>View Project Details</a>
                <FiArrowRight size={12} className={`${activeIndex === 0 ? "block" : "hidden"}`} />
              </div>
            </div>
            <div onClick={() => handleItemClick(1)} className={`work-listing cursor-pointer transition-all flex flex-col items-start gap-3 p-4 project-info max-w-[600px] rounded-lg w-full ${activeIndex === 1 ? "work-active" : ""}`}>
                <div className="flex flex-col gap-1">
                  <h6 className="font-normal text-[16px] text-left leading-[20px] tracking-[0.025em] text-black-900">CubiVue</h6>
                  <p className="font-semibold text-[10px] text-left leading-[12px] tracking-[0.05em] text-black-800">B2B SaaS</p>
                </div>
              <p className="text-[12px] text-left font-light leading-[24px] tracking-[0.05em] text-black-80">CubiVue is a SaaS platform for route optimization, helping businesses efficiently plan and manage last-mile deliveries while improving operational performance.</p>
              <div className="flex flex-row gap-2 items-center"> 
                <a href="#" className={`text-[12px] font-medium text-black-900 underline transition-all ${activeIndex === 1 ? "block" : "hidden"}`}>View Project Details</a>
                <FiArrowRight size={12} className={`${activeIndex === 1 ? "block" : "hidden"}`} />
              </div>
            </div>
            <div onClick={() => handleItemClick(2)} className={`work-listing cursor-pointer transition-all flex flex-col items-start gap-3 p-4 project-info max-w-[600px] rounded-lg w-full ${activeIndex === 2 ? "work-active" : ""}`}>
                <div className="flex flex-col gap-1">
                  <h6 className="font-normal text-[16px] text-left leading-[20px] tracking-[0.025em] text-black-900">Job Apply</h6>
                  <p className="font-semibold text-[10px] text-left leading-[12px] tracking-[0.05em] text-black-800">CONSUMER PLATFORM</p>
                </div>
              <p className="text-[12px] text-left font-light leading-[24px] tracking-[0.05em] text-black-80">Designed a platform that helps users easily create professional CVs and tailored cover letters through a structured yet flexible application flow.</p>
              <div className="flex flex-row gap-2 items-center"> 
                <a href="#" className={`text-[12px] font-medium text-black-900 underline transition-all ${activeIndex === 2 ? "block" : "hidden"}`}>View Project Details</a>
                <FiArrowRight size={12} className={`${activeIndex === 2 ? "block" : "hidden"}`} />
              </div>
            </div>
            <div onClick={() => handleItemClick(3)} className={`work-listing cursor-pointer transition-all flex flex-col items-start gap-3 p-4 project-info max-w-[600px] rounded-lg w-full ${activeIndex === 3 ? "work-active" : ""}`}>
                <div className="flex flex-col gap-1">
                  <h6 className="font-normal text-[16px] text-left leading-[20px] tracking-[0.025em] text-black-900">Employment Care</h6>
                  <p className="font-semibold text-[10px] text-left leading-[12px] tracking-[0.05em] text-black-800">B2B CAREER TRANSITION PLATFORM</p>
                </div>
              <p className="text-[12px] text-left font-light leading-[24px] tracking-[0.05em] text-black-80">Designed a company-sponsored platform that helps transitioning employees prepare for their next role through guided career planning, job documents, networking, and application tracking.</p>
              <div className="flex flex-row gap-2 items-center"> 
                <a href="#" className={`text-[12px] font-medium text-black-900 underline transition-all ${activeIndex === 3 ? "block" : "hidden"}`}>View Project Details</a>
                <FiArrowRight size={12} className={`${activeIndex === 3 ? "block" : "hidden"}`} />
              </div>
            </div>
          </div>
          <div className="work-visuals col-span-2 bg-slate-300 w-full rounded-lg">
            {activeIndex === 0 && (
              <img src="/src/assets/images/cblk-1.png" alt="CubiLock preview" className="w-full h-full object-cover rounded-lg" />
            )}
            {activeIndex === 1 && (
              <img src="/src/assets//images/cbv-1.png" alt="CubiVue preview" className="w-full h-full object-cover rounded-lg" />
            )}
            {activeIndex === 2 && (
              <img src="/src/assets//images/jbaply-1.png" alt="Job Apply preview" className="w-full h-full object-cover rounded-lg" />
            )}
            {activeIndex === 3 && (
              <img src="/src/assets//images/empc-1.png" alt="Employment Care preview" className="w-full h-full object-cover rounded-lg" />
            )}
          </div> 
        </div>
      </div>

      <div className="about flex flex-row gap-6 w-full p-6 bg-blue-50 rounded-xl">
        <div className="about-content flex flex-col gap-4 flex-start w-full items-start">
          <div className="bg-white px-[12px] py-[10px] rounded-md">
            <p className="text-[12px] font-normal leading-[12px] tracking-[0.05em] text-black-900">About Me</p>
          </div>
          <h5 className="text-[18px] font-normal leading-[25px] tracking-[2%]"> Who is <span className="font-semibold">Muaaz</span>?</h5>
          <p className="text-[14px] font-normal text-left leading-[28px] text-black-900 tracking-[0.0125em] max-w-xl">
            Hello! I’m Muaaz
          </p>
          <p className="text-[14px] font-normal text-left leading-[28px] text-black-900 tracking-[0.0125em] max-w-xl">
            I'm a passionate designer who believes in the transformative power of thoughtful, high-quality design. Design shapes our world, and I strive to create work that enhances everyday experiences.
          </p>
          <p className="text-[14px] font-normal text-left leading-[28px] text-black-900 tracking-[0.0125em] max-w-xl">
            I value meaningful conversations that inspire my creativity and fuel collaboration. 
          </p>
          <p className="text-[14px] font-normal text-left leading-[28px] text-black-900 tracking-[0.0125em] max-w-xl">
            Additionally, I have a hidden love for front-end development, which allows me to create designs with the developer experience in mind. 
          </p>
        </div>
        <img src="/src/assets/images/my-photo.png" alt="My Photo" className="my-photo w-full h-full object-cover rounded-sm" />
      </div>
    </div>
  )
}

export default App;