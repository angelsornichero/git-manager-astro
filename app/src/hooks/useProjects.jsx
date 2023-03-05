import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Project from '../services/projects'

export default function useProjects () {
	const [cookies] = useCookies(['sessionJWT'])
	const [projects, setProjects] = useState([])
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(async () => {
		try {
			const project = new Project({ token: cookies.sessionJWT, url: '/projects' })
			const projectsFounded = await project.getProjects()
			console.log(projectsFounded)
			setProjects(projectsFounded.projects)
			setLoading(false)
		} catch (e) {
			console.log(e)
			setError(e.response.data.message)
		}

	}, [])

	return { projects, error, loading } 
}