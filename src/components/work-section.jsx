import { FiArrowRight } from 'react-icons/fi'
import Navbar from "./components/Navbar"
import './App.css'

function WorkSection(){
    
    return (
        <>
            <div className="work-header flex flex-col items-center justify-center content-center text-center gap-[20px]">
            <div className="eye-brow px-[12px] py-[10px] rounded-md">
                <p className="text-[12px] font-normal leading-[12px] tracking-[0.05em] text-black-900">Selected Work</p>
            </div>
            <h5 className="text-[18px] font-normal leading-[25px] tracking-[2%]"> <span className="font-semibold">Designing solutions</span>, not just screens.</h5>
            <p className="text-[14px] font-normal leading-[28px] text-black-800 tracking-[0.05em] max-w-xl">
                Each project reflects my process — understanding users, exploring ideas, and crafting experiences that are both useful and delightful.
            </p>
            </div>
            <div className="work-cards-container">
            <div className="work-card bg-[#f4f5f6] flex flex-col flex-start text-left rounded-xl p-6 mb-6 gap-6">
                <div className="flex flex-col gap-4 project-info max-w-[600px] w-full">
                <img src="/src/assets/images/my-photo.png" className="w-10 h-10 rounded-sm" alt="Project 1" />
                <div className="flex flex-col gap-1">
                    <h6 className="font-normal text-[16px] leading-[20px] tracking-[0.025em] text-black-900">CubiLock</h6>
                    <p className="font-semibold text-[10px] leading-[12px] tracking-[0.05em] text-black-800">B2B DEVICE MANAGEMENT PLATFORM</p>
                </div>
                <p className="text-[14px] font-light leading-[24px] tracking-[0.05em] text-black-80">A centralized platform for large-scale device rental clients to monitor, track, and manage fleets through geofencing, data usage insights, and a dynamic dashboard.</p>
                </div>
                <a href="#" className="text-[14px] font-medium text-black-900 underline hover:cursor-pointer hover:text-black-900">View Project Details</a>
            </div>
            <div className="work-card bg-[#f4f5f6] flex flex-col flex-start text-left rounded-xl p-6 mb-6 gap-6">
                <div className="flex flex-col gap-4 project-info max-w-[600px] w-full">
                    <img src="/src/assets/images/my-photo.png" className="w-10 h-10 rounded-sm" alt="Project 1" />
                    <div className="flex flex-col gap-1">
                        <h6 className="font-normal text-[16px] leading-[20px] tracking-[0.025em] text-black-900">CubiVue</h6>
                        <p className="font-semibold text-[10px] leading-[12px] tracking-[0.05em] text-black-800">B2B SaaS</p>
                    </div>
                    <p className="text-[14px] font-light leading-[24px] tracking-[0.05em] text-black-80">CubiVue is a SaaS platform for route optimization, helping businesses efficiently plan and manage last-mile deliveries while improving operational performance.</p>
                </div>
                <div className="images-container grid grid-rows-2 grid-cols-3 gap-6">
                <img src="/src/assets/images/cbv-1.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 1" />
                <img src="/src/assets/images/cbv-2.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 2" />
                <img src="/src/assets/images/cbv-3.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 3" />
                <img src="/src/assets/images/cbv-4.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 1" />
                <img src="/src/assets/images/cbv-5.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 2" />
                <img src="/src/assets/images/cbv-6.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 3" /> 
                </div>
                <a href="#" className="text-[14px] font-medium text-black-900 underline hover:cursor-pointer hover:text-black-900">View Project Details</a>
            </div>
            <div className="work-card bg-[#f4f5f6] flex flex-col flex-start text-left rounded-xl p-6 mb-6 gap-6">
                <div className="flex flex-col gap-4 project-info max-w-[600px] w-full">
                <img src="/src/assets/images/my-photo.png" className="w-10 h-10 rounded-sm" alt="Project 1" />
                <div className="flex flex-col gap-1">
                    <h6 className="font-normal text-[16px] leading-[20px] tracking-[0.025em] text-black-900">Job Apply</h6>
                    <p className="font-semibold text-[10px] leading-[12px] tracking-[0.05em] text-black-800">CONSUMER PLATFORM</p>
                </div>
                <p className="text-[14px] font-light leading-[24px] tracking-[0.05em] text-black-80">Designed a platform that helps users easily create professional CVs and tailored cover letters through a structured yet flexible application flow.</p>
                </div>
                <div className="images-container grid grid-rows-2 grid-cols-3 gap-6">
                <img src="/src/assets/images/jbaply-1.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 1" />
                <img src="/src/assets/images/jbaply-2.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 2" />
                <img src="/src/assets/images/jbaply-3.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 3" />
                <img src="/src/assets/images/jbaply-4.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 1" />
                <img src="/src/assets/images/jbaply-5.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 2" />
                <img src="/src/assets/images/jbaply-6.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 3" /> 
                </div>
                <a href="#" className="text-[14px] font-medium text-black-900 underline hover:cursor-pointer hover:text-black-900">View Project Details</a>
            </div>
            <div className="work-card bg-[#f4f5f6] flex flex-col flex-start text-left rounded-xl p-6 mb-6 gap-6">
                <div className="flex flex-col gap-4 project-info max-w-[600px] w-full">
                <img src="/src/assets/images/my-photo.png" className="w-10 h-10 rounded-sm" alt="Project 1" />
                <div className="flex flex-col gap-1">
                    <h6 className="font-normal text-[16px] leading-[20px] tracking-[0.025em] text-black-900">Employment Care</h6>
                    <p className="font-semibold text-[10px] leading-[12px] tracking-[0.05em] text-black-800">B2B CAREER TRANSITION PLATFORM</p>
                </div>
                <p className="text-[14px] font-light leading-[24px] tracking-[0.05em] text-black-80">Designed a company-sponsored platform that helps transitioning employees prepare for their next role through guided career planning, job documents, networking, and application tracking.</p>
                </div>
                <div className="images-container grid grid-rows-2 grid-cols-3 gap-6">
                <img src="/src/assets/images/empc-1.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 1" />
                <img src="/src/assets/images/empc-2.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 2" />
                <img src="/src/assets/images/empc-3.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 3" />
                <img src="/src/assets/images/empc-4.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 1" />
                <img src="/src/assets/images/empc-5.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 2" />
                <img src="/src/assets/images/empc-6.png" className="w-full h-full object-cover rounded-md" alt="Project 1 Image 3" /> 
                </div>
                <a href="#" className="text-[14px] font-medium text-black-900 underline hover:cursor-pointer hover:text-black-900">View Project Details</a>
            </div>
            </div>
        </>
    )
}

export default WorkSection