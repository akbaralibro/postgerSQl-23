module.exports = (sequelize, DataType) => {
	const District = sequelize.define('District', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		region_id: {
			type: DataType.INTEGER,
		},
		
	})

	District.associate = models => {
		District.hasMany(models.Venue, {
			foreignKey: 'district_id',
			as: 'venues',
		})

		District.belongsTo(models.Region, {
			foreignKey: 'region_id',
			as: 'region',
		})
	}

	return District
}
