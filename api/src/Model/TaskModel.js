import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

export const Task = sequelize.define('task', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	task: {
		type: DataTypes.STRING,
		allowNull: false
	},
	completed: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	}
})