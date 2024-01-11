import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET localhost:3000/skills/new
router.get('/new', todosCtrl.new)
router.post('/id/reviews')

export { router }
