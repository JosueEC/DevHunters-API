import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors({
  origin: ['http://localhost:3001']
}))

server.use(express.json())

server.use('/', (_req, res) => {
  res.status(200).send({ message: 'Server online' })
})

export default server
