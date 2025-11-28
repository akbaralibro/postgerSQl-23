module.exports = (sequelize, DataType) => {
	const SeatType = sequelize.define('SeatType', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING, 
			allowNull: false,
		},
	})

	SeatType.associate = models => {
		SeatType.hasMany(models.Seat, {
			foreignKey: 'seat_type_id',
			as: 'seats',
		})
	}

	return SeatType
}
