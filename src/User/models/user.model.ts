import { Schema, model } from 'mongoose'
import { User } from '../interfaces/user.interface'

function validatePassword (password: string): boolean {
  return password.length >= 6
}

const UserSchema = new Schema <User>(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'El email es requerido'],
      match: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    },
    password: {
      type: String,
      required: [true, 'La contraseña es requerida'],
      validate: [validatePassword, 'La contraseña debe ser mayor a 6 caracteres']
    },
    role: {
      type: String,
      trim: true,
      required: [true, 'La contraseña es requerida'],
      enum: {
        values: ['admin', 'professional', 'company'],
        message: 'El rol de usuario es invalido'
      }
    },
    name: {
      type: String,
      required: true,
      maxlength: [100, 'El nombre supera el maximo de caracteres permitido']
    },
    description: {
      type: String,
      maxlength: [500, 'La descripcion supera el maximo de caracteres permitido']
    },
    phone: {
      type: String,
      maxlength: [50, 'El telefono supero el maximo de caracteres permitido']
    },
    avatar: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const UserModel = model('users', UserSchema)

export default UserModel
