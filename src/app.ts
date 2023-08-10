import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import userRouter from './User/routes/user.router'

const server = express()

server.use(cors({
  origin: ['http://localhost:3001']
}))

server.use(express.json())
server.use(morgan('dev'))

server.use('/user', userRouter)

server.use('*', (_req: Request, res: Response) => {
  res.status(404).send({ message: 'NOT FOUND' })
})

export default server
