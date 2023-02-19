import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

export const Commit = sequelize.define('commit', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	commit: {
		type: DataTypes.STRING,
		allowNull: false
	},
})