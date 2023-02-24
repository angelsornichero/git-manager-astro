import { Router } from 'express'
import * as ctrlUser from '../controllers/auth.controllers.js'
import * as ctrlProject from '../controllers/projects.controllers.js'
import * as ctrlTask from '../controllers/task.controllers.js'

const router = Router()

// Get
router.get('/api/projects', ctrlProject.getProjects)
router.get('/api/project/:project', ctrlProject.getProject)
// Post
router.post('/api/auth/register', ctrlUser.register)
router.post('/api/auth/login', ctrlUser.login)
router.post('/api/new-project', ctrlProject.createProject)
router.post('/api/new-task/:project', ctrlTask.createTask)
// Put
router.put('/api/task/:id', ctrlTask.updateTask)
router.put('/api/project/:id', ctrlProject.updateProject)
// Delete
router.delete('/api/project/:id', ctrlProject.deleteProject)


export default router