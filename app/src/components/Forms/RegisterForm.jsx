import React, { useState } from 'react'
import AuthRequest from '../../services/auth'
import { useCookies } from 'react-cookie'
import Error from '../Errors/Error'

const RegisterForm = () => {
	const [user, setUser] = useState({ username: '', password: '', repeatPassword: '' })
	const [, setCookie] = useCookies(['sessionJWT'])
	const [error, setError] = useState(null)

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			const data = await new AuthRequest({url: '/auth/register', username: user.username, password: user.password, repeatPassword: user.repeatPassword}).register()
			setCookie('sessionJWT', data.jwt)
			window.location.href = '/'
		} catch (err) {
			console.log(err)
			setError(err.response.data.message)
		}
		
	}
	
	const handleChange = e => {
		setUser({...user, [e.target.name]: e.target.value})
	}
	
	return (
		<>
			{
				error 
					? <Error err={error}  />
					: <div></div>
			}
			<div className='flex justify-center mt-24 p-4  text-[#C778DD]'>
				<form className='p-4 flex flex-col bg-[#393552] text-[#C778DD]' onSubmit={handleSubmit}>
					<h1 className='p-6 text-center text-6xl font-bold'>Register</h1>
					<input placeholder='Username' className='m-4 bg-transparent border-b-2 placeholder:text-lg' onChange={handleChange} name='username' />
					<input placeholder='Password' className='m-4 bg-transparent border-b-2 placeholder:text-lg' onChange={handleChange} name='password' type='password' />
					<input placeholder='Repeat password' className='m-4 bg-transparent border-b-2 placeholder:text-lg' onChange={handleChange} name='repeatPassword' type='password' />
					<button className='m-4 p-3 border-2 border-[#C778DD]'>Register!!</button>
				</form>
			</div>
		</>
	)
}

export default RegisterForm