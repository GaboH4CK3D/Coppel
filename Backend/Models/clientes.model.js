import { Schema, model } from 'mongoose'

const esquema_clientes = new Schema({
    nombre:{
        type:String
    },
    ape_pat:{
        type:String
    },
    ape_mat:{
        type:String
    },
    num_cuenta:{
        type:Number
    },
    fecha:{
        type:String
    },
    adeudo:{
        type:String
    }
})

export const modelo_clientes = new model ('clientes', esquema_clientes)

