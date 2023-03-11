import Task from '../classes/Task.js'

export const createTask = async (req, res) => {
	const { task, completed } = req.body
	const project = req.params.project
	const token = req.headers.authorization

	const newTask = new Task({task, completed, project, token})
	const response = await newTask.create()
	if (response.success === false) return res.status(400).json(response)
	res.json(response)
}

export const updateTask = async (req, res) => {
	const {completed, taskToUpdate } = req.body
	const project = req.params.id
	const token = req.headers.authorization

	const newTask = new Task({completed, project, token})
	const response = await newTask.update(taskToUpdate)
	if (response.success === false) return res.status(400).json(response)
	res.json(response)
}