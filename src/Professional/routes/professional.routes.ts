import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.status(200).send({ message: 'All profesionals' })
})

export default router
