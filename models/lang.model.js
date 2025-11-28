module.exports = (sequelize, DataType) => {
	const Lang = sequelize.define('Lang', {
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

	Lang.associate = models => {
		Lang.hasMany(models.Event, {
			foreignKey: 'lang_id',
			as: 'events',
		})
	}

	return Lang
}
