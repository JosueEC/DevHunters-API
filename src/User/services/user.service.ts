import { User } from '../interfaces/user.interface'
import UserModel from '../models/user.model'

const insertUser = async (item: User): Promise <User> => {
  const response = await UserModel.create(item)
  return response
}

const findUsers = async (): Promise <User[]> => {
  const response = await UserModel.find({})
  return response
}

const findUserByID = async (id: string): Promise <User> => {
  const response = await UserModel.findById({ _id: id })

  if (response == null) throw new Error('NOT_USER_FOUND')
  return response
}

export {
  insertUser,
  findUsers,
  findUserByID
}
