module.exports = (sequelize, DataType) => {
	const VenueTypes = sequelize.define('VenueTypes', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		venue_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		type_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
	})

	VenueTypes.associate = models => {
		VenueTypes.belongsTo(models.Venue, {
			foreignKey: 'venue_id',
			as: 'venue',
		})
		
		VenueTypes.belongsTo(models.Types, {
			foreignKey: 'type_id',
			as: 'type',
		})
	}

	return VenueTypes
}
