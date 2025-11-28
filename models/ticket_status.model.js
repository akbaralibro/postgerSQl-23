module.exports = (sequelize,DataType) => {
	const TicketStatus = sequelize.define('TicketStatus', {
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

	TicketStatus.associate = models => {
		TicketStatus.hasMany(models.Ticket, {
			foreignKey: 'status_id',
			as: 'tickets',
		})
	}

	return TicketStatus
}