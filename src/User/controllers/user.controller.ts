import { Request, Response } from 'express'
import { httpError, httpSucces } from '../helpers/http.helper'
import {
  insertUser,
  findUsers,
  findUserByID
} from '../services/user.service'

const getUsers = (_req: Request, res: Response): void => {
  findUsers()
    .then((response) => httpSucces(res, 200, response))
    .catch((error) => httpError(res, 400, 'GET_USERS_ERROR', error.errors))
}

const postUser = ({ body }: Request, res: Response): void => {
  insertUser(body)
    .then((response) => httpSucces(res, 200, response))
    .catch((error) => httpError(res, 400, 'POST_USER_ERROR', error.errors))
}

const getUserByID = ({ params }: Request, res: Response): void => {
  const { id } = params
  findUserByID(id)
    .then((response) => httpSucces(res, 200, response))
    .catch((error) => httpError(res, 404, 'GET_USER_BY_ID_ERROR', error.errors))
}

export {
  getUsers,
  postUser,
  getUserByID
}
