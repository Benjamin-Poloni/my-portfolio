import { div } from "framer-motion/client";



export default function Contact(){
    return(
        <div id="contact" className="mt-30">
            <div>
                <h3 className="text-3xl font-bold ">Contactame</h3>
                <section className="my-3 bg-white/60 backdrop-blur-sm rounded-2xl sm:text-2xl p-4">
                    <ol className="grid grid-cols-1 gap-6 space-y-2">
                        <li className="text-gray-700">
                            Telefono:
                                     <div className="text-2xl font-bold text-shadow-xs text-indigo-700/80">+598 91413684</div> 
                        </li>
                        <li className="text-gray-700 space-y-6">
                            Correo electronico: 
                            <div className="text-xl font-semibold text-shadow-xs text-indigo-700/80 m-0">benjamin25654@gmail.com</div>
                            <div className="text-xl font-semibold text-shadow-xs text-indigo-700/80 m-0">nelson.poloni@estudiantes.utec.edu.uy</div>
                                                
                        </li>
                    </ol>
                </section>
            </div>
        </div>
    )
}