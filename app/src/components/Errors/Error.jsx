import React from 'react'

// eslint-disable no-alert 
const Error = ({ err }) => {
	return (
		<div className='block'>
			<div className='flex justify-center'>
				<span className='p-4 text-red-700'>{err}</span>
			</div>
		</div>
	)
}

export default Error