import Project from '../classes/Project.js'

export const createProject = async (req, res) => {
	const { name, description, label, done } = req.body
	const token = req.headers.authorization
	const newProject = new Project({name, description, label, done, token})
	const response = await newProject.create()
	res.json(response)
}

