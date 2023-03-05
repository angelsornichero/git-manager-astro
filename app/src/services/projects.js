import axios from 'axios'

const BASEURL = import.meta.env.PUBLIC_BASE_URL 

export default class Projects {
	constructor ({url, token}) {
		this.url = BASEURL + url
		this.token = token
	}

	async getProjects() {
		const { data } = await axios.get(this.url, {
			headers: {
				Authorization: this.token
			}
		})
		
		return data
	}

	async getProject() {
		const { data } = await axios.get(this.url, {
			headers: {
				Authorization: this.token
			}
		})
		
		return data 
	}

	async createProject({ name, description, label }) {
		const { data } = await axios.post(this.url, {
			name, 
			description, 
			label
		},
		{
			headers: {
				Authorization: this.token
			}
		})
		
		return data
	}
}