import React, { useState } from 'react'
import useAuthorization from '../../hooks/useAuthorization'
import Projects from '../../services/projects'
import Error from '../Errors/Error'

const CreateProjectForm = () => {
	const { jwt } = useAuthorization()
	const [project, setProject] = useState({ name: null, description: null, label: null })

	const [error, setError] = useState(false)

	const submitProject = async e => {
		e.preventDefault()
		const newReq = new Projects({ url: '/new-project', token: jwt })

		try {

			await newReq.createProject({ name: project.name, description: project.description, label: project.label || 'All' })
			window.location.href = '/dashboard'
		} catch (err) {
			console.log(err)
			setError(err.response.data.message)
		}
	}

	const handleChange = e => {
		setProject({...project, [e.target.name]: e.target.value})
	}

	return (
		<>
			{
				error 
					? <Error err={error}  />
					: <div></div>
			}
			<div>
				<form className='flex flex-col text-white p-8 bg-[#393552] w-full rounded-sm' onSubmit={submitProject}>
					<h1 className='font-extrabold text-4xl text-center py-6'>Create new project!</h1>
					<input onChange={handleChange} className='bg-transparent border-b-2 p-4 w-full' placeholder='Project name' name='name' type={'text'} />
					<textarea onChange={handleChange} className='w-full bg-transparent border-b-2 p-4' placeholder='Write a description' name='description'></textarea>
					<label className='my-6 flex gap-3'>
						<svg className='text-5xl text-white text-center' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>
						<input onChange={handleChange} className='w-full bg-transparent border-b-2' name='label' placeholder='Write a label' />
					</label>
					<button className='m-4 p-3 border-2 border-[#C778DD]' >Create project!</button>
				</form>
			</div>
			
		</>
	)
}

export default CreateProjectForm