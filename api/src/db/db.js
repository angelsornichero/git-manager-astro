import { sequelize } from './connection.js'
import '../Model/ProjectModel.js'
import '../Model/UserModel.js'

(async () => {
	try { 
		await sequelize.sync({force: true})
		console.log('Connection with database succesfully created')
	}
	catch (e) {
		console.error(e)
	}
})()
