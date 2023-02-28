import axios from 'axios'

const BASEURL = import.meta.env.PUBLIC_BASE_URL 

export default class Projects {
	constructor ({url, token}) {
		this.url = BASEURL + url
		this.token = token
	}

	async getProjects() {
		console.log(this.token)
		const { data } = await axios.get(this.url, {
			headers: {
				Authorization: this.token
			}
		})
		
		return data
	}
}