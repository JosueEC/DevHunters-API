import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import professionalRoutes from './Professional/routes/professional.routes'

const server = express()

server.use(cors({
  origin: ['http://localhost:3001']
}))

server.use(express.json())
server.use(morgan('dev'))

server.use('/professional', professionalRoutes)

server.use('*', (_req, res) => {
  res.status(404).send({ message: 'NOT FOUND' })
})

export default server
