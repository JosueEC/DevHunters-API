import express, { Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import authRouter from './User/routes/auth.router'
import userRouter from './User/routes/user.router'

const server = express()

server.use(cors({
  origin: ['http://localhost:3001']
}))

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(morgan('dev'))

server.use('/auth', authRouter)
server.use('/user', userRouter)

server.use('*', (_req: Request, res: Response) => {
  res.status(404).send({ message: 'NOT FOUND' })
})

export default server
