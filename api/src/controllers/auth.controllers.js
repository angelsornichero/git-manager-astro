import User from '../auth/User.js'

export const register = async (req, res) => {
	const { username, password, repeatPassword } = req.body
	const newUser = new User({username, password, repeatPassword})
	const response = await newUser.register()
	res.json(response)
}