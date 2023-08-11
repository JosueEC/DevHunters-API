import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.status(200).send({ message: 'GET all profesionals' })
})

router.get('/:id', (_req, res) => {
  res.status(200).send({ message: 'GET by ID' })
})

router.post('/', (_req, res) => {
  res.status(200).send({ message: 'POST professional' })
})

router.put('/:id', (_req, res) => {
  res.status(200).send({ message: 'PUT professionale' })
})

router.delete('/:id', (_req, res) => {
  res.status(200).send({ message: 'DELETE professional' })
})

export default router
