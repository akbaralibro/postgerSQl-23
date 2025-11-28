module.exports = (sequelize, DataType) => {
	const Region = sequelize.define('Region', {
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

	Region.associate = models => {
		Region.hasMany(models.Venue, {
			foreignKey: 'region_id',
			as: 'venues',
		})
		
		Region.hasMany(models.District, {
			foreignKey: 'region_id',
			as: 'districts',
		})
	}

	return Region
}
