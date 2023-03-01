import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const isAuthenticated = async (req, res, next) => {
	if (!req.headers.authorization) return res.status(401).json({message: '[!] You have to put a header of authorization'})
	const token = req.headers.authorization.replace('token ', '')
    
	try {
		await jwt.verify(token, process.env.JWT_PASSWORD)
        
	}
	catch(err) {
		res.status(401).json({message: '[!] The token is invalid'})
        
	}
	return next()
}