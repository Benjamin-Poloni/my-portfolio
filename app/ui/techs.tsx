
import { getPublicTechs } from "../services/techService"




export default async function Techs(){
    const techs = await getPublicTechs();
    return(
        <div className=" whitespace-nowrap py-40 " id="technologies">
            <h2 className='font-semibold text-2xl pb-4 text-shadow-2xs text-shadow-violet-400'>Mis tecnologias</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {techs.filter(icon => icon.icon).map((tec,index)=>( 
                    <span key={index} className="flex flex-col  items-center px-6 py-2 text-lg font-semibold bg-gray-100/30 rounded-xl shadow-sm shadow-purple-400/30  hover:scale-105 transition-transform duration-200 hover:shadow-xl">
                    {tec.icon  && <div className='mb-2' dangerouslySetInnerHTML={{__html: tec.icon}} />} 
                    {tec.name && <span>{tec.name}</span>}
                    <hr className='w-full'/>
                    {tec.habilidad && <span>{tec.habilidad}</span>}
                    </span>
                ))}
            </div>
        </div>
    )
}