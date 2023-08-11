import { User } from '../interfaces/user.interface'
import { encrypt } from '../helpers/bcrypt.helper'
import UserModel from '../models/user.model'

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

const loginUser = (): void => {

}

export {
  registerUser,
  loginUser
}
