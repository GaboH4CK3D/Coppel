import { modelo_gerentes } from "../Models/gerentes.model.js"

export const gerentes = (()=>{
    console.log("Gerentes Si")
})

modelo_gerentes.create({
    nombre:"Juan",
    ape_pat:"Moreno",
    ape_mat:"Castañeda",
    direccion:"24 de diciembre #928",
    telefono:"449-872-28-10",
    correo:"juan.morcas@gmail.com"
})
