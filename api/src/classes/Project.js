import { Project as ProjectModel } from '../model/ProjectModel.js'
import { Task as TaskModel } from '../model/TaskModel.js'
import dotenv from 'dotenv'
import getUser from '../lib/getUser.js'
dotenv.config()

export default class Project {
	constructor ({ token, name, description = '',  label = ''}) {
		this.token = token
		this.name = name
		this.description = description
		this.label = label
	}

	async create () {
		// Verify Token
		const username = await getUser(this.token)
		
		// Case 1: Token is not valid
		if (!username) return { success: false, message: '[!] Token is not valid' }

		// Case 2: There are not all the params to create the project
		if (!this.name) return { success: false, message: '[!] The project must have a name' }

		// Case 3: Project already exists
		const projectFound = await ProjectModel.findAll({
			where: {
				username,
				name:  this.name
			}
		})
		if (projectFound[0]) return { success: false, message: '[!] Project already exists' }
		
		// Main case

		try { 
			const newProject = await ProjectModel.create({
				name: this.name,
				description: this.description,
				label: this.label || 'All',
				done: this.done,
				username: username
			})
			console.log(newProject, this)
			return { success: true, message: '[*] Project succesfully created' }
		} catch {
			return { success: false, message: '[!] Error on create project'}
		}
		
	}

	async delete () {
		// Verify Token
		const username = await getUser(this.token)
		
		// Case 1: Token is not valid
		if (!username) return { success: false, message: '[!] Token is not valid'}

		// Main Case

		try {
			await ProjectModel.destroy({
				where: {
					username: username,
					name: this.name
				}
			})
			return { success: true, message: '[*] Project correctly removed' }
		} catch {
			return { success: true, message: '[*] Error on deleting the project' }
		}
	}

	async update (name) {
		// Verify Token
		const username = await getUser(this.token)
		
		// Case 1: Token is not valid
		if (!username) return { success: false, message: '[!] Token is not valid'}

		// Main Case

		try {
			await ProjectModel.update(
				{
					name: this.name,
					description: this.description,
					label: this.label
				},
				{
					where: {
						username: username,
						name
					}
				}
			)
			return { success: true, message: '[*] Project correctly updated' }
		} catch {
			return { success: true, message: '[*] Error on updating the project' }
		}
	}

	async getProject () {
		// Verify Token
		const username = await getUser(this.token)
		
		// Case 1: Token is not valid
		if (!username) return { success: false, message: '[!] Token is not valid'}

		// Search Project
		const projectFound = await ProjectModel.findAll({
			where: {
				name: this.name,
				username
			}
		})
		// Case 2 Projects doesn't exists
		if (!projectFound[0]) return { success: false, message: '[!] No project found' }

		// Main case
		try {
			const tasks = await TaskModel.findAll({
				where: {
					username,
					projectid: projectFound[0].id
				}
			})
			return { success: true, project: projectFound[0], tasks }
		} catch {
			return { success: false, message: '[!] Error on finding the project' }
		}
	}
}

