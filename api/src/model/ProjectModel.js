import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Task } from './TaskModel.js'

export const Project = sequelize.define('project', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	description: {
		type: DataTypes.STRING,
		allowNull: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	label: {
		type: DataTypes.STRING,
		allowNull: false
	},
	done: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	}
})


Project.hasMany(Task, {
	foreignKey: 'projectid',
	sourceKey: 'id'
})

