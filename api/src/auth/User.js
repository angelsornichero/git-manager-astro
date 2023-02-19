import { User as UserModel } from '../Model/UserModel.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()
class User {
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

	login () {
        
	}
}

export default User