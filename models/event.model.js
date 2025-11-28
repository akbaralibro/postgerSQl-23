module.exports = (sequelize, DataType) => {
	const Event = sequelize.define('Event', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING, 
			allowNull: false,
		},
		photo: {
			type: DataType.STRING, 
			allowNull: false,
		},
		startDate: {
			type: DataType.STRING, 
			allowNull: false,
		},
		startTime: {
			type: DataType.TIME, 
			allowNull: true,
		},
		finishDate: {
			type: DataType.STRING,
			allowNull: true,
		},
		finishTime: {
			type: DataType.TIME,
			allowNull: true,
		},
		info: {
			type: DataType.STRING, 
			allowNull: true,
		},
		event_type_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		human_category_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		venue_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		lang_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		release_id: {
			type: DataType.INTEGER, 
			allowNull: true,
		},
	})

	Event.associate = models => {
		Event.hasMany(models.Ticket, {
			foreignKey: 'event_id',
			as: 'tickets',
		})

		Event.belongsTo(models.EventType, {
			foreignKey: 'event_type_id',
			as: 'eventType',
		})

		Event.belongsTo(models.HumanCategory, {
			foreignKey: 'human_category_id',
			as: 'humanCategory',
		})

		Event.belongsTo(models.Venue, {
			foreignKey: 'venue_id',
			as: 'venue',
		})

		Event.belongsTo(models.Lang, {
			foreignKey: 'lang_id',
			as: 'lang',
		})
	}

	return Event
}
