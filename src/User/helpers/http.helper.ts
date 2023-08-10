import { Response } from 'express'

const httpError = (res: Response, statusCode: number, message: string, errorRaw?: any): void => {
  res.status(statusCode).send({
    message,
    error: errorRaw
  })
}

const httpSucces = (res: Response, statusCode: number, data: any): void => {
  res.status(statusCode).send({ data })
}

export { httpError, httpSucces }
