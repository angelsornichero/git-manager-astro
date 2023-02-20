import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export default async function (token) {
	try {
		const { username } = await jwt.verify(token, process.env.JWT_PASSWORD)
		return username
	} catch {
		return false
	}
}