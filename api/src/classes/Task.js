import { Task as TaskModel } from '../model/TaskModel.js'
import { Project as ProjectModel } from '../model/ProjectModel.js'
import getUser from '../lib/getUser.js'
export default class Task {
	constructor ({ task, completed, token, project }) {
		this.task = task
		this.completed = completed
		this.token = token
		this.project = project
	}

	async create () {
		const username = await getUser(this.token)        

		// Case 1: Token is not valid
		if (!username) return { success: false, message: '[!] Token is not valid' }

		// Search Project
		const projectFound = await ProjectModel.findAll({
			where: {
				username,
				name:  this.project
			}
		})
		// Case 2: Project doesn't exists 
		if (!projectFound[0]) return { success: false, message: '[!] Project doesn\'t exists' }

		// Case 3: Task already exists
		const taskFound = await TaskModel.findAll({
			where: {
				task: this.task,
				username: username,
				projectid: this.project
			}
		})
		if (taskFound[0]) return { success: false, message: '[!] Task already exists' }

		// Main Case
		try { 
			await TaskModel.create({
				task: this.task,
				username: username,
				projectid: projectFound[0].id,
				completed: this.completed
			})
			return { success: false, message: '[*] Task successfully created' }
		} catch {
			return { success: false, message: '[!] Error on create the task' }
		}
	}
}