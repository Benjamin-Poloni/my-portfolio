
import { Proyect } from "../types/proyect";

const apiURL= process.env.API_BASE_URL

export async function getPublicProyects(): Promise<Proyect[]>{

    try{
        const response = await fetch(`${apiURL}/proyecto/proyectList`,{
            method:'GET',
            headers:{
                'Content-type': 'application/json'
            }
        });

        if(!response.ok){
            throw new Error('error al cargar los proyectos' + response.status)
        }

        const data:Proyect[] = await response.json();
        return data;

    }catch(error){
        console.log('error en el fetch', error);
        throw error;
    }
    
}