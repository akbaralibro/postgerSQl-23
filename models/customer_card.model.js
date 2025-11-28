module.exports = (sequelize,DataType) => {
	const CustomerCard = sequelize.define('CustomerCard', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		customer_id: {
			type: DataType.INTEGER,
		},
		name: {
			type: DataType.STRING
		},
		phone: {
			type: DataType.STRING
		},
		number: {
			type: DataType.STRING
		},
		year: {
			type: DataType.STRING
		},
		month: {
			type: DataType.STRING
		},
		is_active: {
			type: DataType.BOOLEAN
		},
		is_main: {
			type: DataType.BOOLEAN
		},
	})

	CustomerCard.associate = models => {
		CustomerCard.belongsTo(models.Customer, {
			foreignKey: 'customer_id',
			as: 'customer',
		})
	}

	return CustomerCard
}