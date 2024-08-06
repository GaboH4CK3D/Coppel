import { modelo_clientes } from '../Models/clientes.model.js'

export const clientes = (()=>{
    console.log("Clientes Si")
})

modelo_clientes.create({
    nombre:"Jose Luis",
    ape_pat:"Lopez",
    ape_mat:"Juarez",
    num_cuenta:1,
    fecha:"18/06/23",
    adeudo:"$15000"
})