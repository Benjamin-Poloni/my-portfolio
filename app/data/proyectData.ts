import type { Proyect } from "../types/proyect";




export  const ProyectData:Proyect[] = [
{
    nombre:'Autoservice Largacha',
    descripcion:'Proyecto final desarrollado junto a un compañero para egresar de bachillerato en el Polo Tecnológico de Durazno. Creamos una aplicación web de comercio electrónico que permite a los usuarios navegar productos, agregarlos a un carrito y realizar compras simuladas. \El sistema fue desarrollado con PHP, MySQL y HTML/CSS, aplicando conceptos de programación estructurada, manejo de bases de datos y diseño de interfaces.',
    descripcionCard:'Proyecto final de bachillerato: desarrollo de un e-commerce en PHP y MySQL con funcionalidades de carrito y gestión de productos.',
    tecnologias:['PHP','MySQL'],
    img:[{
        alt:'Captura de la estructura del proyecto Java en IntelliJ, mostrando carpetas como app, auth, controller, dao, factory, model, service, strategy y validation dentro del paquete Proyecto.',
        src:'/imagenAutoservice.png'
    }],
    link:'https://github.com/Benjamin-Poloni/Proyecto'
},
{
    nombre:'Sistema de Gestión ASUR',
    descripcion:'Proyecto académico desarrollado en la Universidad Tecnológica (UTEC). Consiste en una aplicación de consola (terminal) que implementa un sistema CRUD (crear, leer, actualizar y eliminar) para la gestión de clientes y administradores de la empresa ASUR. El sistema fue desarrollado en Java, aplicando principios de programación orientada a objetos y manejo de archivos para el almacenamiento de datos.',
    descripcionCard:'Aplicación de consola desarrollada en Java como proyecto académico en UTEC. Implementa un CRUD para la gestión de clientes y administradores de ASUR.',
    tecnologias:['Java','PostgreSQL','Docker',],
    img:[{
        alt:'',
        src:'/imagenAsur.png'
    }],
    link:'https://github.com/Benjamin-Poloni/ProyectoUtec'
}
];