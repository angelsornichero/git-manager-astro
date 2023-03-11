import axios from 'axios'

const BASEURL = import.meta.env.PUBLIC_BASE_URL 

export default class Task {
	constructor ({url, token}) {
		this.url = BASEURL + url
		this.token = token
	}

	async createTask({ task }) {
		const { data } = await axios.post(this.url, {
			task,
			completed: false
		},
		{
			headers: {
				Authorization: this.token
			}
		})
		
		return data
	}

	async updateTask ({ completed, task }) {
		const { data } = await axios.put(this.url, {
			taskToUpdate: task,
			completed
		},
		{
			headers: {
				Authorization: this.token
			}
		})
		
		return data
	}
}