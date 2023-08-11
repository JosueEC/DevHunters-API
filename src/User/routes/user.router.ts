import { Router } from 'express'
import {
  getUsers,
  postUser,
  getUserByID,
  putUser,
  deleteUser
} from '../controllers/user.controller'

const router = Router()

// * http://localhost:3001/user [GET]
router.get('/', getUsers)

// * http://localhost:3001/user [POST]
router.post('/', postUser)

// * http://localhost:3001/user/:id [GET]
router.get('/:id', getUserByID)

// * http://localhost:3001/user/:id [PUT]
router.put('/:id', putUser)

// * http://localhost:3001/user/:id [DELETE]
router.delete('/:id', deleteUser)
export default router
