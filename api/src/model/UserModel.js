import { DataTypes } from 'sequelize'
import { sequelize } from '../db/connection.js'
import { Project } from './ProjectModel.js'
import { Task } from './TaskModel.js'

export const User = sequelize.define('users', {
	username:  {
		type: DataTypes.STRING,
		allowNull: false,
		primaryKey: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
}, {
	timestamps: false
})

User.hasMany(Project, {
	foreignKey: 'username',
	sourceKey: 'username'
})

User.hasMany(Task, {
	foreignKey: 'username',
	sourceKey: 'username'
})