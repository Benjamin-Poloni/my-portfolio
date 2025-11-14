
import Link from "next/link";
import  {ProyectData}  from "../data/proyectData";
import Image from "next/image";

export default function ProyectsCard(){
    return(
        <div className="mt-40" id="proyects">
            <h1 className="text-3xl font-bold mb-4">Proyectos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 text-pretty items-stretch ">
                
                {ProyectData.map((data, index)=>(
                    <section key={index} className="h-full fle felx-col bg-white/20 gap-6 w-full backdrop-blur-2xl  p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-102 transition-transform duration-300 text-center flex flex-col items-center border border-white/20">
                        <h2 className="text-2xl font-semibold text-center min-h-[70px] ">{data.nombre}</h2>
                        {data.img.map((img, index)=>
                        <section key={index} className="p-6">
                            <Link
                                href={data.link ?? '#'}
                                target="_blank"
                            >
                               <Image 
                            width={200}
                            height={200}
                            alt={img.alt}
                            src={img.src}
                            
                            className="rounded-lg object-contain mx-auto mb-4 max-h-[250]"
                        />
                            </Link>
                         
                        </section>
                        )}
                        
                        
                        <ul className="flex flex-wrap gap-2 justify-center mt-3 ">
                        {data.tecnologias.map((tec,index)=>
                        <li key={index} className="bg-purple-800/50 text-white px-3 py-1 rounded-full text-sm">{tec}</li>
                        )}
                        </ul>
                        <p className="leading-relaxed mt-4 text-[15px] max-w-md mx-auto">{data.descripcionCard}</p>
                    </section>
                    
                ))}
            </div>
        </div>
    );
}