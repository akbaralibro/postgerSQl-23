module.exports = (sequelize, DataType) => {
	const Venue = sequelize.define('Venue', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		address: {
			type: DataType.STRING,
			allowNull: false,
		},
		location: {
			type: DataType.STRING,
			allowNull: false,
		},
		site: {
			type: DataType.STRING,
			allowNull: false,
		},
		phone: {
			type: DataType.STRING,
			allowNull: false,
		},
		schema: {
			type: DataType.STRING,
			allowNull: false,
		},
		region_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
		district_id: {
			type: DataType.INTEGER,
			allowNull: false,
		},
	})

	Venue.associate = models => {
		Venue.hasMany(models.Event, {
			foreignKey: 'venue_id',
			as: 'events',
		})
		
		Venue.hasMany(models.Seat, {
			foreignKey: 'venue_id',
			as: 'seats',
		})
		
		Venue.hasMany(models.VenuePhoto, {
			foreignKey: 'venue_id',
			as: 'venuePhotos',
		})
		
		Venue.hasMany(models.VenueTypes, {
			foreignKey: 'venue_id',
			as: 'venueTypes',
		})

		Venue.belongsTo(models.Region, {
			foreignKey: 'region_id',
			as: 'region',
		})
		
		Venue.belongsTo(models.District, {
			foreignKey: 'district_id',
			as: 'district',
		})
	}

	return Venue
}
