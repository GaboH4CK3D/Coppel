import { modelo_empleados } from "../Models/empleados.model.js"

export const empleados = (()=>{
    console.log("Empleados Si")
})

modelo_empleados.create({
    nombre:"Carlos Daniel",
    ape_pat:"Druan",
    ape_mat:"Quezada",
    direccion:"Paso blanco #134",
    telefono:"449-763-09-27",
    correo:"carldura@gmail.com"
})
