import { Request, Response } from 'express'
import { httpError, httpSucces } from '../helpers/http.helper'
import {
  insertUser,
  findUsers,
  findUserByID,
  updateUser,
  removeUser
} from '../services/user.service'

const getUsers = (_req: Request, res: Response): void => {
  findUsers()
    .then((response) => httpSucces(res, 200, response))
    .catch(({ message }) => httpError(res, 400, message))
}

const postUser = ({ body }: Request, res: Response): void => {
  insertUser(body)
    .then((response) => httpSucces(res, 200, response))
    .catch(({ message }) => httpError(res, 400, message))
}

const getUserByID = ({ params }: Request, res: Response): void => {
  const { id } = params
  findUserByID(id)
    .then((response) => httpSucces(res, 200, response))
    .catch(({ message }) => httpError(res, 404, message))
}

const putUser = ({ params, body }: Request, res: Response): void => {
  const { id } = params
  updateUser(id, body)
    .then((response) => httpSucces(res, 200, response))
    .catch(({ message }) => httpError(res, 404, message))
}

const deleteUser = ({ params }: Request, res: Response): void => {
  const { id } = params
  removeUser(id)
    .then((response) => httpSucces(res, 200, response))
    .catch(({ message }) => httpError(res, 404, message))
}

export {
  getUsers,
  postUser,
  getUserByID,
  putUser,
  deleteUser
}
