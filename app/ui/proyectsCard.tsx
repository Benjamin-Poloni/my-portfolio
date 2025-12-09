
import Link from "next/link";
import { getPublicProyects } from "../services/proyectService";
import Image from "next/image";

export default async function ProyectsCard(){
    const proyects = await getPublicProyects();
    return(
        <div className="mt-20 mb-20" id="proyects">
        <Link href={'https://my-portfolio-benjamin-poloni.vercel.app'}>
        <Image
                        className="h-0 w-0 z-0"
                        
                          src='/og-image.png'
                         alt="imagen que quiero utilizar para el preview"
                         width={2}
                         height={2}
                        />
        </Link>
            
            <h1 className="text-3xl font-bold mb-4">Proyectos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 text-pretty items-stretch ">
                
                {proyects.map((data, index)=>(
                    <section key={index} className="h-full fle felx-col bg-white/20 gap-6 w-full backdrop-blur-2xl  p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-102 transition-transform duration-300 text-center flex flex-col items-center border border-white/20">
                        <h2 className="text-2xl font-semibold text-center min-h-[70px] ">{data.nombre}</h2>
                        {data.proyectoImagen.map((imagen, index)=>(
                            <section key={index} className="p-6">
                            <Link
                                href={data.link ?? '#'}
                                target="_blank"
                                aria-label="Ir al repositorio"
                            >
                               <Image 
                            width={200}
                            height={200}
                            alt={'prueba'}
                            src={imagen.url}
                            
                            className="rounded-lg object-contain mx-auto mb-4 max-h-[250]"
                        />
                            </Link>
                         
                        </section>
                        ))

                        }
                        
                        
                        
                        <ul className="flex flex-wrap gap-2 justify-center mt-3 ">
                        {data.tech.map((tec,index)=>
                        <li key={index} className="bg-purple-800/50 text-white px-3 py-1 rounded-full text-sm">{tec.name}</li>
                        )}
                        </ul>
                        <p className="leading-relaxed mt-4 text-[15px] max-w-md mx-auto">{data.cardDescription}</p>
                    </section>
                    
                ))}
            </div>
        </div>
    );
}