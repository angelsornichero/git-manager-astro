import { User as UserModel } from '../model/UserModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import  { Project as ProjectModel } from '../model/ProjectModel.js'
dotenv.config()

export default class User {
	constructor ({ username, password, repeatPassword = undefined }) {
		this.username = username
		this.password = password
		this.repeatPassword = repeatPassword
	}

	async register () {
		// Case 1: there is not username or password
		if (!this.username || !this.password) return { success: false, message: '[!] There is not username or password' }
		
		// Case 2: User already exists
		const existsUser = await UserModel.findAll({ 
			where: {
				username: this.username
			}
		})
		if (existsUser[0]) return { success: false, message: '[!] User already exists' }
		
		// Case 3: password and repeatPassword are not the same
		if (this.password !== this.repeatPassword) return { success: false, message: '[!] Password and Repeat Password are not the same' }
		
		// Main case
		try {
			const encrypted_password = bcrypt.hashSync(this.password, 8)
			await UserModel.create({
				username: this.username,
				password: encrypted_password
			})
			const jwtToReturn = await jwt.sign({ username: this.username }, process.env.JWT_PASSWORD)
			return { success: true, message: '[*] User correctly register', jwt: jwtToReturn }
		} catch {
			return { success: false, message: '[!] Error on creating user' }
		}

	}

	async login () {
		// Case 1: there is not username or password
		if (!this.username || !this.password) return { success: false, message: '[!] There is not username or password' }

		// Case 2: User not exists
		const existsUser = await UserModel.findAll({ 
			where: {
				username: this.username
			}
		})
		if (!existsUser[0]) return { success: false, message: '[!] User doesn\'t exists or password is incorrect' }

		// Case 3: Wrong password 
		const validPasswd = bcrypt.compareSync(this.password, existsUser[0].password)
		if (!validPasswd) return { success: false, message: '[!] User doesn\'t exists or password is incorrect' }

		// Main case 

		try { 
			const jwtToReturn = await jwt.sign({ username: this.username }, process.env.JWT_PASSWORD)
			return { success: true, message: '[*] User correctly login', jwt: jwtToReturn }
		} catch {
			return { success: false, message: '[!] Error on sending JWT' }
		}

	}
	
	async getProjects (token) {
		// Case 1: Token is invalid
		try {
			const { username } = await jwt.verify(token, process.env.JWT_PASSWORD)
			this.username = username
		} catch {
			return { success: false, message: '[!] JWT token is invalid' }
			
		}
		// Main case
		try { 
			const projects = await ProjectModel.findAll({
				where: {
					username: this.username
				}
			})
			return { success: true, projects }
		} catch {
			return { success: false, message: '[!] Error on searching the projects' }
		}
	}
}

