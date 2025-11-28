module.exports = (sequelize, DataType) => {
	const VenuePhoto = sequelize.define('VenuePhoto', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		venue_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		url: {
			type: DataType.STRING,
			allowNull: false,
		},
	})

	VenuePhoto.associate = models => {
		VenuePhoto.belongsTo(models.Venue, {
			foreignKey: 'venue_id',
			as: 'venue',
		})
	}

	return VenuePhoto
}
