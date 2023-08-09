import 'dotenv/config'
import server from './src/app'
import dbConnect from './src/config/mongo'

const { PORT } = process.env

dbConnect()
  .then(() => {
    console.info('Connected to mongodb database')
    server.listen(PORT, () => {
      console.info('Server listening on port ', PORT)
    })
  })
  .catch((error) => console.error(error.message))
