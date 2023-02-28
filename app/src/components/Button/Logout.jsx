import React from 'react'
import { useCookies } from 'react-cookie'

const Logout = (props) => {
	const [, , removeCookie] = useCookies(['sessionJWT'])

	const handleLogout = () => {
		removeCookie('sessionJWT')
		window.location.href = '/'
	}
	return (
		<button onClick={handleLogout}>{props.children}</button>
	)
}

export default Logout