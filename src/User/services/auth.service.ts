import { User } from '../interfaces/user.interface'
import { Auth } from '../interfaces/auth.interface'
import { Session } from '../interfaces/session.interface'
import { encrypt, verified } from '../helpers/bcrypt.helper'
import UserModel from '../models/user.model'
import { generateToken } from '../helpers/jwt.helper'

const registerUser = async ({ name, role, email, password }: User): Promise <User> => {
  const user = await UserModel.findOne({ email })
  if (user != null) throw new Error('USER_ALREADY_EXISTS')

  const hashPassword = await encrypt(password)

  const response = await UserModel.create({
    name,
    role,
    email,
    password: hashPassword
  })

  return response
}

const loginUser = async ({ email, password }: Auth): Promise<Session> => {
  const user = await UserModel.findOne({ email })

  if (user == null) throw new Error('USER_NOT_FOUND')

  const hashPassword = user.password
  const isCorrect = await verified(password, hashPassword)

  if (!isCorrect) throw new Error('INVALID_CREDENTIALS')

  const token = generateToken(user.email)

  const userSession = {
    token,
    user
  }

  return userSession
}

export {
  registerUser,
  loginUser
}
