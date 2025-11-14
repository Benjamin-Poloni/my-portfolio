import image from "@/public/MyImagen.png"
import Image from "next/image";
export default function HeaderC(){

    return(
        <header className="flex  justify-between items-center py-3 z-10 ">
            <Image
            className="rounded-full h-12 w-12"
            
            src={image}
             alt="Imagen de Benjamin"
            />
            
            <nav className="flex flex-row gap-x-6 opacity-70 ">
                <a href="#top"  className="text-white hover:text-sky-500 hover:scale-110 transition-transform">Home</a>
                <a href="#proyects" className="text-white hover:text-sky-500 hover:scale-110 transition-transform">Proyects</a>
                <a href="#technologies" className="text-white hover:text-sky-500 hover:scale-110 transition-transform">Technologies</a>
                <a href="#about" className="text-white hover:text-sky-500 hover:scale-110 transition-transform">About</a>
                <a href="#contact" className="text-white hover:text-sky-500 hover:scale-110 transition-transform">Contact</a>
            </nav>

        </header>
    )
}