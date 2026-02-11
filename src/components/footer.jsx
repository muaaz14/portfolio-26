import '../App.css'
import { Headset } from "lucide-react";


function Footer() {
    return (
        <div className="footer-container flex flex-col gap-6 py-6 px-8">
            <a href='mailto:muaaaz.design@gmail.com' className="contact-me-container flex flex-col w-full py-[160px] gap-4 content-center text-center items-center bg-[url('../src/assets/images/contact-me-bg.png')] bg-cover bg-center bg-no-repeat rounded-xl">
                <Headset className='text-white'/>
                <p className="text-md font-normal leading-4 text-white">Have a Product Idea?</p>
                <h2 className="text-3xl font-semibold leading-10 text-white">Get in Touch</h2>
                <p className="text-md font-normal leading-4 text-white">Let’s transform your idea into a useful revenue generating product.</p>
            </a>
            <div className="footer-links flex flex-row justify-between">
                <div className="cr flex flex-col-reverse">
                    <p>Copyrights 2026 - Muaaaz. All rights reserved</p>
                </div>
                <div className="social-links flex flex-row gap-3">
                    <a href="https://www.linkedin.com/in/muaazahmad14" className="flex w-11 h-11 bg-[#f4f5f6] rounded items-center place-content-center hover:bg-black-900 hover:text-white hover:no-underline"><p className='text-center'>in</p></a>
                    <a href='https://app.uxcel.com/ux/muaazahmad' className="flex w-11 h-11 bg-[#f4f5f6] rounded items-center place-content-center hover:bg-black-900 hover:text-white hover:no-underline"><p className='text-center'>ux</p></a>
                    <a href='https://www.behance.net/muaaza14' className="flex w-11 h-11 bg-[#f4f5f6] rounded items-center place-content-center hover:bg-black-900 hover:text-white hover:no-underline"><p className='text-center'>be</p></a>
                    <a href='https://www.dribbble.com.muaaz14' className="flex w-11 h-11 bg-[#f4f5f6] rounded items-center place-content-center hover:bg-black-900 hover:text-white hover:no-underline"><p className='text-center'>dr</p></a>
                </div>
            </div>

        </div>
    )
}

export default Footer