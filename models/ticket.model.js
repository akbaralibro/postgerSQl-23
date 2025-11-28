module.exports = (sequelize, DataType) => {
	const Ticket = sequelize.define('Ticket', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		event_id: {
			type: DataType.INTEGER,
			allowNull: false
		},
		seat_id: {
			type: DataType.INTEGER,
			allowNull: false
		},
		price: {
			type: DataType.INTEGER,
		},
		service_free: {
			type: DataType.INTEGER,
		},
		status_id: {
			type: DataType.INTEGER,
			allowNull: false
		},
		ticket_type: {
			type: DataType.INTEGER,
		}
	})



	Ticket.associate = models => {
		Ticket.hasMany(models.CartItem, {
			foreignKey: 'ticket_id',
			as: 'cartItems',
		})

		Ticket.belongsTo(models.TicketStatus, {
			foreignKey: 'status_id',
			as: 'TicketStatus',
		})

		Ticket.belongsTo(models.Event, {
			foreignKey: 'event_id',
			as: 'event',
		})

		Ticket.belongsTo(models.Seat, {
			foreignKey: 'seat_id',
			as: 'seat',
		})
	}

	return Ticket
}