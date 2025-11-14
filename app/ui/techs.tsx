
import {motion} from 'framer-motion'
const techs = [{
    icon:(<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256">
<g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none"  className="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M28.1875,-0.00391c2.75,6.36328 -9.86719,10.29297 -11.03516,15.59766c-1.07812,4.86719 7.48828,10.52734 7.49219,10.52734c-1.30078,-2.01562 -2.24219,-3.67969 -3.54687,-6.81641c-2.20703,-5.30469 13.43359,-10.10156 7.08984,-19.30859zM36.55078,8.8125c0,0 -11.04687,0.69922 -11.60937,7.76953c-0.25,3.14844 2.90234,4.82813 2.99609,7.12109c0.07031,1.86719 -1.88672,3.42578 -1.88672,3.42578c0,0 3.55078,-0.66797 4.66406,-3.52344c1.23047,-3.16797 -2.38672,-5.33203 -2.02344,-7.86719c0.35156,-2.42578 7.85938,-6.92578 7.85938,-6.92578zM39.23047,25.14453c-1.15625,-0.05078 -2.44141,0.33203 -3.60547,1.16797c2.28125,-0.48828 4.21094,0.90625 4.21094,2.51563c0,3.625 -5.23828,7.05078 -5.23828,7.05078c0,0 8.10938,-0.92578 8.10938,-6.87891c0,-2.46094 -1.55469,-3.76562 -3.47656,-3.85547zM19.18359,25.15234c0,0 -10.12109,-0.13672 -10.12109,2.72656c0,2.99219 13.25391,3.20313 22.71875,1.35938c0,0 2.52734,-1.73047 3.19922,-2.375c-6.20312,1.26563 -20.35937,1.43359 -20.35937,0.33984c0,-1.01172 4.5625,-2.05078 4.5625,-2.05078zM16.73828,30.72266c-1.55078,0 -3.86719,1.19922 -3.86719,2.35547c0,2.32422 11.69141,4.11719 20.34766,0.71875l-2.99609,-1.83594c-5.86719,1.87891 -16.68359,1.27734 -13.48437,-1.23828zM18.17969,35.92188c-2.12891,0 -3.50781,1.3125 -3.50781,2.28125c0,2.98438 12.70703,3.28516 17.74219,0.25l-3.19922,-2.03516c-3.76172,1.58984 -13.20703,1.80469 -11.03516,-0.49609zM11.08984,38.625c-3.46875,-0.07031 -5.72266,1.48828 -5.72266,2.78125c-0.00391,6.875 35.52344,6.54297 35.52344,-0.48437c0,-1.16406 -1.375,-1.71875 -1.87109,-1.98437c2.90234,6.71875 -29.05078,6.19922 -29.05078,2.23438c0,-0.90234 2.34375,-1.78906 4.52344,-1.36328l-1.84766,-1.05078c-0.54297,-0.08203 -1.0625,-0.125 -1.55469,-0.13281zM44.63672,43.25c-5.40234,5.11719 -19.08984,6.98438 -32.85547,3.82422c13.76172,5.62891 32.78516,2.46094 32.85547,-3.82422z"></path></g></g>
</svg>),
    nombre:'Java',
    conocimiento:'intermedio'
},
{
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>),
    nombre:'JS',
    conocimiento:'intermedio'
},
{
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-html"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" /><path d="M2 21v-6" /><path d="M5 15v6" /><path d="M2 18h3" /><path d="M20 15v6h2" /><path d="M13 21v-6l2 3l2 -3v6" /><path d="M7.5 15h3" /><path d="M9 15v6" /></svg>),
    nombre:'HTML',
    conocimiento:'avanzado'
}
,
{
    icon:(<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>),
    nombre:'CSS',
    conocimiento:'intermedio'
},
{
    icon:(<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
<path fill="#8bc34a" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path><path fill="#fff" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path>
</svg>),
    nombre:'SpringBoot',
    conocimiento:'basico'
}]

export default function Techs(){
    return(
        <div className=" whitespace-nowrap py-40 " id="technologies">
            <h2 className='font-semibold text-2xl pb-4 text-shadow-2xs text-shadow-violet-400'>Mis tecnologias</h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {techs.map((tec,index)=>( 
                    <span key={index} className="flex flex-col  items-center px-6 py-2 text-lg font-semibold bg-gray-100/30 rounded-xl shadow-sm bor">
                    {tec.nombre}
                    {tec.icon}
                    {tec.conocimiento}
                    </span>
                ))}
            </div>
        </div>
    )
}