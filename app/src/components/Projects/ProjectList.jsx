import React, { useState, useEffect } from 'react'
import Project from '../../services/projects'
import { useCookies } from 'react-cookie'
import Error from '../Errors/Error'
import ProjectCard from './ProjectCard.jsx'

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
		<div className='my-6 mx-16'>
			{
				error 
					? <Error err={error} />
					: <div></div>
			}
			{
				loading ? <h1>Loading ...</h1>
					:
					projects.map(({ id, name, createdAt, description, label }) => (
						<ProjectCard key={id} name={name} label={label} createdAt={createdAt} description={description} id={id} />
					))
			}
		</div>
	)
}

export default ProjectList