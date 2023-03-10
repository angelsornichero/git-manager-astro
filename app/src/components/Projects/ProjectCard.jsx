import React from 'react'
const ProjectCard = (props) => {


	const handleMovemenet = e => {
		const $ = selector => document.querySelector(selector)
		
		const wrapper = $(`#wrapper-${props.id}`)
		wrapper.style.transition = 'none'

		const height = wrapper.clientHeight
		const width = wrapper.clientWidth

		const { layerX, layerY } = e.nativeEvent
		
		const rotationX = ((layerX - width / 2) / width) * 10
		const rotationY = ((layerY - height / 2) / height) * 10
		
		wrapper.style.transform = `
			perspective(500px)
			scale(1,1)
			rotateX(${rotationX}deg) 
			rotateY(${rotationY}deg)
		`
	}

	const handleStop = () => {
		const $ = selector => document.querySelector(selector)
		
		const wrapper = $(`#wrapper-${props.id}`)

		wrapper.style.transition = 'transform .5s ease-in-out'
		wrapper.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)'
	}
 
	return (
		<a href={`/projects/${props.name}`}>
			<div onMouseLeave={handleStop} onMouseMove={handleMovemenet} id={`wrapper-${props.id}`} className='bg-gradient-to-r from-[#26233a] to-[#29273d] w-[600px] rounded-lg  shadow-2xl opacity-1'>
				<div className='p-4 flex justify-between w-full'>
					<span className='text-3xl font-extrabold overflow-hidden text-ellipsis text-[#ebbcba]'>{props.name}</span>
					<span className='text-lg text-[#31748f]'>{props.createdAt.split('T')[0]}</span>
				</div>
				<div className='flex justify-between '>
					<p className='m-4 text-white text-xl overflow-hidden text-ellipsis'>{props.description}</p>
					<label className='flex justify-between gap-8 mx-3'>
						<svg className='text-5xl  text-white text-center' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>
						<span className='pt-2 align-text-bottom text-xl text-[#f6c177]'>{props.label === '' ? 'No label': props.label}</span>
					
					</label>
				</div>
			</div>
		</a>
	)
}

export default ProjectCard