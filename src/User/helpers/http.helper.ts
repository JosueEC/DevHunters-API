import { Response } from 'express'

const httpError = (res: Response, statusCode: number, error: string, errorRaw?: any): void => {
  res.status(statusCode).send({
    error,
    errors: errorRaw
  })
}

const httpSucces = (res: Response, statusCode: number, data: any): void => {
  res.status(statusCode).send({ data })
}

export { httpError, httpSucces }
