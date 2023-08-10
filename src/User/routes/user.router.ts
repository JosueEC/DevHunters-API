import { Router } from 'express'
import {
  getUsers,
  postUser,
  getUserByID
} from '../controllers/user.controller'

const router = Router()

// * http://localhost:3001/user [GET]
router.get('/', getUsers)

// * http://localhost:3001/user [POST]
router.post('/', postUser)

// * http://localhost:3001/user/:id [GET]
router.get('/:id', getUserByID)

export default router
