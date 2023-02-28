import React, { useState, useEffect } from 'react'
import Project from '../../services/projects'
import { useCookies } from 'react-cookie'

const ProjectList = () => {
	const [cookies] = useCookies(['sessionJWT'])
	const [projects, setProjects] = useState([])
	const [, setError] = useState(false)
	const [loading, setLoading] = useState(true)
	const loadProjects = async () => {
		try {
			const project = new Project({ token: cookies.sessionJWT, url: '/projects' })
			const projectsFounded = await project.getProjects()
			setProjects(projectsFounded.projects)
			setLoading(false)
		} catch (e) {
			console.log(e)
			setError(e.response.data.message)
		}
	}

	useEffect(() => loadProjects())
	
	
	return (
		<div>
			{ 
				loading ? <h1>Loading...</h1>
					: projects.map(project => (
						<h1 key={project.id}>{project.name}</h1>
					))
			}
		</div>
	)
}

export default ProjectList