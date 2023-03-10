import React from 'react'

const Task = ({ task }) => {
	return (
		<span className='text-xl'>{task.task}</span>
	)
}

export default Task