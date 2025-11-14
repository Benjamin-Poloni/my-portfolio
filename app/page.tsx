
import Link from "next/link";
import TimeLine from "./ui/timeLine";
import ProyectsCard from "./ui/proyectsCard";


export default function Home() {
  return (
    <main className="text-white mx-auto py-40 w-full font-mono">
      <h1 className="flex text-3xl gap-x-3 mb-2.5 font-bold">Hola!, soy Benjamin<Link href="https://www.linkedin.com/in/benjamin-poloni" target="_blank" className=" font-normal [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white me-2 px-2.5 py-0.5 rounded-2xl justify-center items-center text-xs self-center hover:scale-105 transition-transform">Disponible para trabajar</Link></h1>
      <h2 className="text-xl my-2 text-amber-100">Estudiante de Licencitura en Tecnologias De La Iformacion por UTEC.</h2>
      <section className="my-5">
      <p className="mb-3"><span className="text-sky-200">Soy de Durazno, Uruguay. </span> Me apasiona el desarrollo web, especialmente el desarrollo de aplicaciones back-end.</p>
    
      </section>

      <TimeLine />
      
      <ProyectsCard />
    </main>
  );
}


  <p>Actualmente trabajo como <span>profesor de informática en ANEP</span>, 
      pero me encuentro en búsqueda de una oportunidad laboral donde pueda seguir creciendo y poner 
      en práctica mis habilidades como programador.</p>