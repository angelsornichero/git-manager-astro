import User from '../class/User.js'

export const register = async (req, res) => {
	const { username, password, repeatPassword } = req.body
	const newUser = new User({username, password, repeatPassword})
	const response = await newUser.register()
	if (response.success === false) return res.status(401).json(response)
	res.json(response)
}

export const login = async (req, res) => {
	const { username, password } = req.body
	const newUser = new User({username, password})
	const response = await newUser.login()
	if (response.success === false) return res.status(401).json(response)
	res.json(response)
}