const Joi = require("joi")

const validateSeat = (data) => {
  const schema = Joi.object({
  sector: Joi.number().integer().required(),
  rowNumber: Joi.number().integer().optional(),
  number: Joi.number().integer().optional(),
  venue_id: Joi.number().integer().required(),
  seat_type_id: Joi.number().integer().required(),
  locationInSchema: Joi.string().max(255).optional(),
  })
  return schema.validate(data)
}

module.exports = validateSeat
