const bcrypt = require('bcrypt')

module.exports = (sequelize, DataType) => {
	const Admin = sequelize.define('Admin', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		login: {
			type: DataType.STRING,
		},
		password: {
			type: DataType.STRING,
		},
		is_active: {
			type: DataType.BOOLEAN,
		},
		is_creator: {
			type: DataType.BOOLEAN,
		},
	})

	Admin.beforeSave(async admin => {
		if (admin.changed('password')) {
			admin.password = await bcrypt.hash(admin.password, 10)
		}
	})

	return Admin
}
