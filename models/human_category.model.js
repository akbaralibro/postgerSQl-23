module.exports = (sequelize, DataType) => {
	const HumanCategory = sequelize.define('HumanCategory', {
		id: {
			type: DataType.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		name: {
			type: DataType.STRING,
			allowNull: false,
		},
		startAge: {
			type: DataType.INTEGER,
		},
		finishAge: {
			type: DataType.INTEGER,
		},
		gender: {
			type: DataType.ENUM('male', 'female', 'other'),
			allowNull: false,
		},
	})

	HumanCategory.associate = models => {
		HumanCategory.hasMany(models.Event, {
			foreignKey: 'human_category_id',
			as: 'events',
		})
	}

	return HumanCategory
}
