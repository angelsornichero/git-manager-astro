import React from 'react'

const ProjectCard = (props) => {
	

	return (
		
		<div id={`wrapper-${props.id}`} className='bg-[#26233a] flex max-w-2xl rounded-lg'>
			<div className='p-4 flex justify-between w-full'>
				<span className='text-xl text-[#ebbcba]'>{props.name}</span>
				<span className='text-lg text-[#31748f]'>{props.createdAt.split('T')[0]}</span>
			</div>
			<div className='min-h-[300px]'>
				<p>{props.description}</p>
			</div>

		</div>
	)
}

export default ProjectCard