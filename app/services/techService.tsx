import { tech } from "../types/tech";

const apiURL = process.env.API_BASE_URL;



export async function getPublicTechs(): Promise<tech[]>{
    try{
        const response = await fetch(`${apiURL}/tech/listarTechs`,{
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
        });

        if(!response.ok){
            throw new Error('Error al cargar las tecnologias: ' + response.status);
        }

        const data: tech[] = await response.json();
        return data;
    }catch(error){
        console.log("Fetch error: ",error );
        throw error;
    }
}