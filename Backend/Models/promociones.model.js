import { Schema, model } from 'mongoose'

const esquema_promociones = new Schema({
    producto:{
        type:String
    },
    precio:{
        type:String
    },
    stock:{
        type:Number
    },
    descuento:{
        type:String
    },
    precio_nuevo:{
        type:String
    }
})

export const modelo_promociones = new model ('promociones', esquema_promociones)

