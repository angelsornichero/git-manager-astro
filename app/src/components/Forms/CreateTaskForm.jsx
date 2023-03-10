import React, { useState } from 'react'
import useAuthorization from '../../hooks/useAuthorization'
import Task from '../../services/tasks'
import Error from '../Errors/Error'

const CreateTaskForm = ({ project }) => {
	const { jwt } = useAuthorization()
	const [task, setTask] = useState({ task: null })

	const [error, setError] = useState(false)

	const submitProject = async e => {
		e.preventDefault()
		const newReq = new Task({ url: `/new-task/${project}`, token: jwt })
		console.log(project)
		try {
			await newReq.createTask({ task: task.task })
			window.location.reload()
		} catch (err) {
			console.log(err)
			setError(err.response.data.message)
		}
        
	}

	const handleChange = e => {
		setTask({...task, [e.target.name]: e.target.value})
	}

	return (
		<>
			{
				error 
					? <Error err={error}  />
					: <div></div>
			}
			<div className='mt-24 justify-center flex'>
				<form className='flex gap-5 text-white' onSubmit={submitProject}>
					<input onChange={handleChange} className='mt-2 bg-transparent h-12 px-4 border-4 rounded-lg placeholder:text-[#C778DD] border-[#C778DD] text-[#C778DD] w-96' placeholder='Write a task' name='task' type={'text'} />
					<button className='m-4 border-4 rounded-md border-[#C778DD]' >
						<svg className='text-[#C778DD]' stroke="currentColor" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
							<defs></defs>
							<path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
							<path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
						</svg>
					</button>
				</form>
			</div>
			
		</>
	)
}

export default CreateTaskForm