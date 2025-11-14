import { StaticImageData } from "next/image";

export type Proyect = {
    nombre:string;
    descripcion:string;
    descripcionCard:string;
    link?:string;
    img:{
        alt:string;
        src:string;
    }[];
    tecnologias:string[];
}