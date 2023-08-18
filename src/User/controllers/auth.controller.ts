import { Request, Response } from 'express'
import { httpSucces, httpError } from '../helpers/http.helper'
import { registerUser, loginUser } from '../services/auth.service'

const register = ({ body }: Request, res: Response): void => {
  registerUser(body)
    .then((response) => httpSucces(res, 200, response))
    .catch(({ message }) => httpError(res, 400, message))
}

const login = ({ body }: Request, res: Response): void => {
  loginUser(body)
    .then((response) => httpSucces(res, 200, response))
    .catch(({ message }) => httpError(res, 400, message))
}

export {
  register,
  login
}
