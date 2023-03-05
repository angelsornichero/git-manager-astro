import React from 'react'
import ProjectNav from './project-components/ProjectNav'
import Error from '../Errors/Error'
import useSingleProject from '../../hooks/useSingleProject'

const SingleProject = ({ project }) => {
	const { projectInfo, error, loading } = useSingleProject(project)

	return (
		<> 
			{
				error 
					? <Error />
					: <div></div>
			}
			{
				loading ? <h1>Loading</h1>
					: (
						<>
							<ProjectNav name={projectInfo.name} label={projectInfo.label} /> 
						</>
					)
			}       
		</>
	)
}

export default SingleProject