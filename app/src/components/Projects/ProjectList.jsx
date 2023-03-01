import React, { useState, useEffect } from 'react'
import Project from '../../services/projects'
import { useCookies } from 'react-cookie'
import Error from '../Errors/Error'

const ProjectList = () => {
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
	
	
	return (
		<div>
			{
				error 
					? <Error err={error} />
					: <div></div>
			}
			{
				loading ? <h1>Loading ...</h1>
					:
					projects.map(({ id, name }) => (
						<span key={id}>{name}</span>
					))
			}
		</div>
	)
}

export default ProjectList