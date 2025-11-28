module.exports = (sequelize, DataType) => {
	const Cart = sequelize.define('Cart', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		customer_id: {
			type: DataType.INTEGER,
		},
		status_id: {
			type: DataType.INTEGER,
		},
	})

	Cart.associate = models => {
		Cart.hasMany(models.Booking, {
			foreignKey: 'cart_id',
			as: 'bookings',
		})

		Cart.hasMany(models.CartItem, {
			foreignKey: 'cart_id',
			as: 'cartItems',
		})

		Cart.belongsTo(models.Customer, {
			foreignKey: 'customer_id',
			as: 'customer',
		})
	}

	return Cart
}
