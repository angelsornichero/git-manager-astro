import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
// ENV variables
dotenv.config()

const startDB = async () => {
	try {
		// You have to pass your credentials and your sql type
		const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
			host: 'localhost',
			dialect: 'mariadb'
		})
		console.log('[*] Database connected to: ', sequelize.config.database)
	}
    
	catch(err) {
		console.error(err)
	}
}

startDB()