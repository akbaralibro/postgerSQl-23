module.exports = (sequelize,DataType) => {
	const PayMethod = sequelize.define('PayMethod', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false
		}
	})

	PayMethod.associate = models => {
		PayMethod.hasMany(models.Booking,{
			foreignKey: 'payment_method_id',
			as: 'booking'
		})
	}

	return PayMethod
}