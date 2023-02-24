import jwt from 'jsonwebtoken'



export const isAuthenticated = async (req, res, next) => {
	console.log(req.body)
	if (!req.headers.authorization) return res.status(400).json({statusCode: 401, message: '[!] You have to put a header of authorization'}, res)
	const token = req.headers.authorization.replace('token ', '')
    
	try {
		await jwt.verify(token, process.env.JWT_SECRET)
        
	}
	catch(err) {
		res.status(401).json({statusCode: 401, message: '[!] The token is invalid'}, res)
        
	}
    
	return next()
}