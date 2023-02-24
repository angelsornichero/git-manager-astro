import { Router } from 'express'
import * as ctrlUser from '../controllers/auth.controllers.js'
import * as ctrlProject from '../controllers/projects.controllers.js'
import * as ctrlTask from '../controllers/task.controllers.js'
import { isAuthenticated } from '../middleware/isAuthorized.js'

const router = Router()

// Get
router.get('/api/projects', isAuthenticated, ctrlProject.getProjects)
router.get('/api/project/:project', isAuthenticated, ctrlProject.getProject)
// Post
router.post('/api/auth/register', ctrlUser.register)
router.post('/api/auth/login', ctrlUser.login)
router.post('/api/new-project', isAuthenticated, ctrlProject.createProject)
router.post('/api/new-task/:project', isAuthenticated, ctrlTask.createTask)
// Put
router.put('/api/task/:id', isAuthenticated, ctrlTask.updateTask)
router.put('/api/project/:id', isAuthenticated, ctrlProject.updateProject)
// Delete
router.delete('/api/project/:id', isAuthenticated, ctrlProject.deleteProject)


export default router