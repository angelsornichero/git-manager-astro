import React from 'react'

// eslint-disable no-alert 
const Error = ({ err }) => {
	return (
		<div className='flex justify-center'>
			<span className='p-4 text-red-700'>{err}</span>
		</div>
	)
}

export default Error