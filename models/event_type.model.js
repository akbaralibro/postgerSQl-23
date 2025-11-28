module.exports = (sequelize, DataType) => {
	const EventType = sequelize.define('EventType', {
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

	EventType.associate = models => {
		EventType.hasMany(models.Event, {
			foreignKey: 'event_type_id',
			as: 'events',
		})
	}

	return EventType
}
