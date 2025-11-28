module.exports = (sequelize, DataType) => {
	const Types = sequelize.define('Types', {
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

	Types.associate = models => {
		Types.hasMany(models.VenueTypes, {
			foreignKey: 'type_id',
			as: 'types',
		})
	}

	return Types
}
