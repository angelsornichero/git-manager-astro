// import { Project as ProjectModel } from '../model/ProjectModel'
// import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export default class Project {
	constructor ({ token, name, description = '',  label, done}) {
		this.token = token
		this.name = name
		this.description = description
		this.label = label
		this.done = done
	}

	async create () {
        
	}

	async delete () {

	}

	async update () {
        
	}

	async getTasks () {
        
	}
}

