import { sequelize } from './connection.js'
import '../model/ProjectModel.js'
import '../model/UserModel.js'

(async () => {
	try { 
		await sequelize.sync({force: false})
		console.log('[*] Database connected ')
	}
	catch (e) {
		console.error(e)
	}
})()
