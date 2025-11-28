module.exports = (sequelize, DataType) => {
	const Seat = sequelize.define('Seat', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		sector: {
			type: DataType.INTEGER, 
			allowNull: false,
		},
		rowNumber: {
			type: DataType.INTEGER, 
		},
		number: {
			type: DataType.INTEGER, 
		},
		venue_id: {
			type: DataType.INTEGER, 
			allowNull: false,
		},
		seat_type_id: {
			type: DataType.INTEGER, 
			allowNull: false,
		},
		locationInSchema: {
			type: DataType.STRING, 
		},
	
	})

	Seat.associate = models => {
		Seat.hasMany(models.Ticket, {
			foreignKey: 'seat_id',
			as: 'tickets',
		})

		Seat.belongsTo(models.SeatType, {
			foreignKey: 'seat_type_id',
			as: 'SeatType',
		})

		Seat.belongsTo(models.Venue, {
			foreignKey: 'venue_id',
			as: 'venue',
		})
	}
	return Seat
}
