const Joi = require("joi")

const validateVenueTypes = (data) => {
  const schema = Joi.object({
    venue_id: Joi.number().integer().required(),
    type_id: Joi.number().integer().required(),
  })
  return schema.validate(data)
}

module.exports = validateVenueTypes
