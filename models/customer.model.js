const bcrypt = require('bcrypt')
module.exports = (sequelize, DataType) => {
	const Customer = sequelize.define('Customer', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		firstName: {
			type: DataType.STRING,
			allowNull: false
		},
		lastName: {
			type: DataType.STRING,
			allowNull: false
		},
		phone: {
			type: DataType.STRING,
			allowNull: false
		},
		password: {
			type: DataType.STRING,
		},
		email: {
			type: DataType.STRING,
			allowNull: false,
		},
		birthDate: {
			type: DataType.STRING,
		},
		gender: {
			type: DataType.STRING,
		},
		lang_id: {
			type: DataType.INTEGER,
		},
		hash_refresh_token: {
			type: DataType.STRING,
		}
	})

	Customer.beforeSave(async (customer) => {
		if (customer.changed('password')) {
			customer.password = await bcrypt.hash(customer.password, 10)
		}
	})

	Customer.associate = models => {
		Customer.hasMany(models.Cart, {
			foreignKey: 'customer_id',
			as: 'carts',
		})

		Customer.hasMany(models.CustomerCard, {
			foreignKey: 'customer_id',
			as: 'customerCards',
		})

		Customer.hasMany(models.CustomerAddress, {
			foreignKey: 'customer_id',
			as: 'customerAddress',
		})
	}

	return Customer
}