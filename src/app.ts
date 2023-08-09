import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import dbConnect from './config/mongo'

const PORT = process.env.PORT

const server = express()

server.use(cors({
  origin: ['http://localhost:3001']
}))

server.use(express.json())

dbConnect()
  .then(() => console.info('Connected to mongo database'))
  .catch((error) => console.error(error.message))

server.use('/', (_req, res) => {
  res.status(200).send({ message: 'Server online' })
})

server.listen(PORT, () => {
  console.info('Server listening on port ', PORT)
})
