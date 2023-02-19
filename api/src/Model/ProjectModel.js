import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Task } from './TaskModel.js'
import { Commit } from './CommitModel.js'

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
	priority: {
		type: DataTypes.STRING,
		allowNull: false
	},
	done: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	}
})

Project.hasMany(Commit, {
	foreignKey: 'projectid',
	sourceKey: 'id'
})

Project.hasMany(Task, {
	foreignKey: 'projectid',
	sourceKey: 'id'
})

