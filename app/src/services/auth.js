import axios from 'axios'

const BASEURL = import.meta.env.PUBLIC_BASE_URL 

export default class AuthRequest {
	constructor ({ url, username, password, repeatPassword }) {
		this.url = BASEURL + url
		this.username = username
		this.password = password
		this.repeatPassword = repeatPassword
	}

	async register () {
		const { data } = await axios.post(this.url, {
			username: this.username,
			password: this.password,
			repeatPassword: this.repeatPassword
		})
		return data
	}
}