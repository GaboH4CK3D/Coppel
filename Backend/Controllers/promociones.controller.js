import { modelo_promociones } from "../Models/promociones.model.js"

export const promociones = (()=>{
    console.log("Promociones Si")
})

modelo_promociones.create({
    producto:"Pilas AAA",
    precio:"$80",
    stock:52,
    descuento:"50%",
    precio_nuevo:"$40"
})