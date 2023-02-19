import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'

export const Project = sequelize.define('project', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	username:  {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	priority: {
		type: DataTypes.STRING,
		allowNull: false
	},
	done: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	}
})

