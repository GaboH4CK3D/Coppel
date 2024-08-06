import { modelo_productos } from "../Models/productos.model.js"

export const productos = (()=>{
    console.log("Productos Si")
})

modelo_productos.create({
    producto:"Pilas AA",
    precio:"$40",
    stock:10
})
