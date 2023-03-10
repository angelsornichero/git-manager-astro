import React from 'react'
import Task from './Task'

const TaskList = ({ tasks }) => {
	return (
		<div className='flex justify-center mt-12 flex-col'>
			{
				tasks.length === 0
					? <label className='p-4 bg-[#575279] rounded-md text-white'>No tasks yet</label>
					: tasks.map(task => (
						<div className='flex mx-[500px] p-6 rounded-xl bg-[#44415a] my-8 opacity-90' key={task.id}>
							<Task task={task} />
						</div>
					))
			}
		</div>
	)
}

export default TaskList