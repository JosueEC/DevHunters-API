import { Request, Response } from 'express'
import { httpSucces, httpError } from '../helpers/http.helper'
import { registerUser } from '../services/auth.service'

const register = ({ body }: Request, res: Response): void => {
  registerUser(body)
    .then((response) => httpSucces(res, 200, response))
    .catch(({ message }) => httpError(res, 400, message))
}

export {
  register
}
