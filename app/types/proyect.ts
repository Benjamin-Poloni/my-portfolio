import { tech } from "./tech";


export type Proyect = {
    nombre:string;
    descripcion:string;
    cardDescription:string;
    link?:string;
    proyectoImagen:{
        alt:string;
        url:string;
    }[];
    tech:tech[];
}