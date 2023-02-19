import { sequelize } from './connection.js'
import '../Model/ProjectModel.js'
import '../Model/UserModel.js'

(async () => {
	try { 
		await sequelize.sync({force: false})
		console.log('[*] Database connected ')
	}
	catch (e) {
		console.error(e)
	}
})()
