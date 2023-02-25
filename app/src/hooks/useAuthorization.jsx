import { useEffect, useState } from 'react'
import * as jose from 'jose'
import { useCookies } from 'react-cookie'


const useAuthorization = () => {
	const [jwt, setJwt] =  useState()
	const [cookie] = useCookies(['sessionJWT'])

	const loadId = async () => {
		const { payload } = await jose.jwtVerify(cookie.sessionJWT, new TextEncoder().encode(import.meta.env.PUBLIC_SECRET_JWT))
		if (payload) return setJwt(cookie.sessionJWT)
		setJwt(null)
	}

	useEffect(() => {loadId()})

	return { jwt }
}

export default useAuthorization