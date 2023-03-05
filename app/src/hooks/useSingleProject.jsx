import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Projects from '../services/projects'

export default function useSingleProject (project) {
	const [projectInfo, setProjectInfo] = useState()
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [cookies] = useCookies(['sessionJWT'])

	useEffect(async () => {
		try {
			const projectReq = new Projects({ token: cookies.sessionJWT, url: `/project/${project}` })
			const projectsFounded = await projectReq.getProject()
			console.log(projectsFounded)
			setProjectInfo(projectsFounded.project)
			setLoading(false)
		} catch (e) {
			console.log(e)
			setError(e.response.data.message)
		}
	}, [])

	return { projectInfo, loading, error }
}