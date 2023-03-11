import React, { useState } from 'react'
import TaskService from '../../services/tasks'
import useAuthorization from '../../hooks/useAuthorization'

const Task = ({ task, project }) => {
	const [completed, setCompleted] = useState(task.completed)	
	const { jwt } = useAuthorization()

	const handleUpdate = async () => {
		const newTask = new TaskService({url: `/task/${project}`, token: jwt})
		await newTask.updateTask({ completed: !completed, task: task.task })
		setCompleted(!completed)
	}

	return (
		<div className='flex justify-between w-full'>
			<span className='text-xl'>{task.task}</span>
			<button onClick={handleUpdate}>{
				completed === true
					? <svg className='text-green-600 text-2xl' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"><path d="M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"></path></svg>
					:<svg className='text-red-700 text-2xl font-bold' stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor"></path></svg>
			}
			</button>
		</div>
	)
}

export default Task