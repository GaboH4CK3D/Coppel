import { model } from 'mongoose'
import { esquema_empleados } from './empleados.model.js'

export const modelo_gerentes = new model ('gerentes', esquema_empleados)

