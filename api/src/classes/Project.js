import { Project as ProjectModel } from '../model/ProjectModel.js'
import dotenv from 'dotenv'
import getUser from '../lib/getUser.js'
dotenv.config()

export default class Project {
	constructor ({ token, name, description = '',  label = '', done}) {
		this.token = token
		this.name = name
		this.description = description
		this.label = label
		this.done = done
	}

	async create () {
		// Verify Token
		const username = await getUser(this.token)
		
		// Case 1: Token is not valid
		if (!username) return { success: false, message: '[!] Token is not valid' }

		// Case 2: There are not all the params to create the project
		if (!this.name || this.done === undefined || this.done === null) return { success: false, message: '[!] There are some fields missing' }

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
				label: this.label,
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

	async update () {
        
	}

	async getTasks () {
        
	}
}

