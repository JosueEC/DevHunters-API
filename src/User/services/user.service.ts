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

const updateUser = async (id: string, item: User): Promise <User> => {
  const response = await UserModel.findByIdAndUpdate(
    { _id: id }, item, { new: true }
  )

  if (response == null) throw new Error('USER_NOT_FOUND')
  return response
}

const removeUser = async (id: string): Promise <User> => {
  const response = await UserModel.findOneAndRemove({ _id: id })

  if (response == null) throw new Error('NOT_FOUND')
  return response
}

export {
  insertUser,
  findUsers,
  findUserByID,
  updateUser,
  removeUser
}
