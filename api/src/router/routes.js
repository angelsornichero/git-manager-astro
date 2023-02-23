import { Router } from 'express'
import * as crtlUser from '../controllers/auth.controllers.js'
import * as crtlProject from '../controllers/projects.controllers.js'

const router = Router()

// Get
router.get('/api/projects', crtlProject.getProjects)
router.get('/api/project/:project')
// Post
router.post('/api/auth/register', crtlUser.register)
router.post('/api/auth/login', crtlUser.login)
router.post('/api/new-project', crtlProject.createProject)
router.post('/api/new-task/:project')
// Put
router.put('/api/task/:id')
router.put('/api/project/:id', crtlProject.updateProject)
// Delete
router.delete('/api/project/:id', crtlProject.deleteProject)


export default router