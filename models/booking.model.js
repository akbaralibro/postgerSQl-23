module.exports = (sequelize, DataType) => {
	const Booking = sequelize.define('Booking', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		cart_id: {
			type: DataType.INTEGER,
		},
		payment_method_id: {
			type: DataType.INTEGER,
		},
		delivery_method_id: {
			type: DataType.INTEGER,
		},
		discount_coupon_id: {
			type: DataType.INTEGER,
		},
		status_id: {
			type: DataType.INTEGER,
		},
	})

	Booking.associate = models => {
		Booking.belongsTo(models.PayMethod, {
			foreignKey: 'payment_method_id',
			as: 'payMethod_booking',
		})

		Booking.belongsTo(models.DeliveryMethod, {
			foreignKey: 'delivery_method_id',
			as: 'deliveryMethod_booking',
		})

		Booking.belongsTo(models.Cart, {
			foreignKey: 'cart_id',
			as: 'cart_booking',
		})
	}

	return Booking
}
