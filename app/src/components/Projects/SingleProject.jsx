import React from 'react'
import ProjectNav from './project-components/ProjectNav'
import useSingleProject from '../../hooks/useSingleProject'
import TaskList from '../Tasks/TaskList'
import CreateTaskForm from '../Forms/CreateTaskForm'

const SingleProject = ({ project }) => {
	const { projectInfo, error, loading, tasks } = useSingleProject(project)
	
	if (error) window.location.href = '/Notfoundjeje'

	return (
		<> 
			{
				error 
					? <div></div>
					: <div></div>
			}
			{
				loading ? <h1>Loading</h1>
					: (
						<>
							<ProjectNav name={projectInfo.name} label={projectInfo.label} /> 
							<CreateTaskForm project={projectInfo.name} />
							<TaskList project={projectInfo.name} tasks={tasks} />
						</>
					)
			}       
		</>
	)
}

export default SingleProject