import { useEffect, useState } from 'react'
import * as jose from 'jose'
import { useCookies } from 'react-cookie'


export default function useAuthorization () {
	const [jwt, setJwt] =  useState()
	const [username, setUsername] =  useState()
	const [cookie] = useCookies(['sessionJWT'])

	const loadUser = async () => {
		const { payload } = await jose.jwtVerify(cookie.sessionJWT, new TextEncoder().encode(import.meta.env.PUBLIC_SECRET_JWT))
		if (payload) {
			setUsername(payload.username)
			return setJwt(cookie.sessionJWT)
		}
		setJwt(null)
	}

	useEffect(() => {loadUser()})

	return { jwt, username }
}

