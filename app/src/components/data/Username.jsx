import React from 'react'
import useAuthorization from '../../hooks/useAuthorization'


const Username = () => {
	const { username } = useAuthorization()

	return (
		<span className='text-2xl pt-2'>{username}</span>
	)
}

export default Username