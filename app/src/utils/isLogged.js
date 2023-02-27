import jsonwebtoken from 'jsonwebtoken'

export default async function isLoggedIn (cookie) {
	try { 
		await jsonwebtoken.verify(cookie.replace('sessionJWT=', ''), import.meta.env.PUBLIC_SECRET_JWT)
		return true
	} catch {
		return false
	}
    
}