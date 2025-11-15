'use client'
import image from "@/public/MyImagen.png"
import Image from "next/image";
import { useState } from "react";
export default function HeaderC(){
 const [open, setOpen] = useState(false)
    return(
        <header className="relative flex  justify-between items-center py-3 z-10 ">
            <Image
            className="rounded-full h-12 w-12"
            
            src={image}
             alt="Imagen de Benjamin"
            />
            
                <button
            className="text-white text-3xl sm:hidden"
            onClick={()=> setOpen(!open)} 
            >
                ☰
            </button>
            
            
            <nav className={`${open ? "flex" : "hidden"} flex-col gap-4 absolute right-0 top-full mt-4 p-2 sm:flex sm:flex-row sm:static sm:gap-x-6 sm:opacity-70 sm:bg-transparent  rounded-xl backdrop-blur-sm`}>
            
                <a href="#top"  className="text-white hover:text-sky-500 hover:scale-110 transition-transform">Home</a>
                <a href="#proyects" className="text-white hover:text-sky-500 hover:scale-110 transition-transform">Proyects</a>
                <a href="#technologies" className="text-white hover:text-sky-500 hover:scale-110 transition-transform">Technologies</a>
                <a href="#about" className="text-white hover:text-sky-500 hover:scale-110 transition-transform">About</a>
                <a href="#contact" className="text-white hover:text-sky-500 hover:scale-110 transition-transform">Contact</a>
            </nav>

        </header>
    )
}