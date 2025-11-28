module.exports = (sequelize, DataType) => {
	const CustomerAddress = sequelize.define('CustomerAddress', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		customer_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		name: {
			type: DataType.STRING,
		},
		region_id: {
			type: DataType.INTEGER,
		},
		district_id: {
			type: DataType.INTEGER,
		},
		street: {
			type: DataType.STRING,
		},
		house: {
			type: DataType.STRING,
		},
		flat: {
			type: DataType.INTEGER,
		},
		location: {
			type: DataType.STRING,
		},
		postIndex: {
			type: DataType.STRING,
		},
		info: {
			type: DataType.STRING,
		},
	})

	CustomerAddress.associate = models => {
		CustomerAddress.belongsTo(models.Customer, {
			foreignKey: 'customer_id',
			as: 'customer',
		})
	}

	return CustomerAddress
}
