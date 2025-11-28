module.exports = (sequelize,DataType) => {
	const CartItem = sequelize.define('CartItem', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		ticket_id: {
			type: DataType.INTEGER,
		},
		cart_id: {
			type: DataType.INTEGER,
		},
	})

	CartItem.associate = models => {
		CartItem.belongsTo(models.Cart, {
			foreignKey: 'cart_id',
			as: 'cart',
		})
		
		CartItem.belongsTo(models.Ticket, {
			foreignKey: 'ticket_id',
			as: 'ticket',
		})
	}

	return CartItem
}