import { Schema, model } from 'mongoose'

const esquema_productos = new Schema({
    producto:{
        type:String
    },
    precio:{
        type:String
    },
    stock:{
        type:Number
    }
})

export const modelo_productos = new model ('productos', esquema_productos)

