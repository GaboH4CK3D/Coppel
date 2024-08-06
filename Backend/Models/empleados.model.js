import { Schema, model } from 'mongoose'

export const esquema_empleados = new Schema({
    nombre:{
        type:String
    },
    ape_pat:{
        type:String
    },
    ape_mat:{
        type:String
    },
    direccion:{
        type:String
    },
    telefono:{
        type:String
    },
    correo:{
        type:String
    }
})

export const modelo_empleados = new model ('empleados', esquema_empleados)

