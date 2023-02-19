import { Sequelize } from 'sequelize'

const startDB = async () => {
	try {
		// You have to pass your credentials and your sql type
		const sequelize = new Sequelize('database', 'username', '@password', {
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