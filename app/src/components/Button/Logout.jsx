import React from 'react'
import { useCookies } from 'react-cookie'

const Logout = () => {
	const [, , removeCookie] = useCookies(['sessionJWT'])

	const handleLogout = () => {
		removeCookie('sessionJWT')
		window.location.href = '/'
	}
	return (
		<button onClick={handleLogout}>Logout</button>
	)
}

export default Logout