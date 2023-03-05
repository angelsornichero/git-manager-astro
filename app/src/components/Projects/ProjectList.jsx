import React from 'react'
import Error from '../Errors/Error'
import ProjectCard from './ProjectCard.jsx'
import useProjects from '../../hooks/useProjects'

const ProjectList = () => {
	const { projects, loading, error } = useProjects()
	
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
					<div className='flex flex-wrap my-8 mx-12 gap-32 justify-center'>
						{
							projects.map(({ id, name, createdAt, description, label }) => (
								<ProjectCard key={id} name={name} label={label} createdAt={createdAt} description={description} id={id} />
							))
						}

					</div>
						
					
			}
		</div>
	)
}

export default ProjectList