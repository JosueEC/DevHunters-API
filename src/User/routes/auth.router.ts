import { Router } from 'express'
import { register } from '../controllers/auth.controller'

const router = Router()

// * http://localhost:3001/auth/register [POST]
router.post('/register', register)

export default router
