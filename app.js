import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

import { clientes } from './Backend/Controllers/clientes.controller.js'
import { empleados } from './Backend/Controllers/empleados.controller.js'
import { gerentes } from './Backend/Controllers/gerentes.controller.js'
import { productos } from './Backend/Controllers/productos.controller.js'
import { promociones } from './Backend/Controllers/promociones.controller.js'

mongoose.connect(process.env.url_bd)
.then(()=>{
    console.log('Si funciona la base')
})
.catch((err)=>{
    console.log('No funciona la base')
})

const app = express();
app.use(cors());

app.listen(4000, () => {
    console.log('Si escucha')
})

clientes()
empleados()
gerentes()
productos()
promociones()
