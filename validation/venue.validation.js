const Joi = require("joi")

const validateVenue = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(150).required(),
    address: Joi.string().min(5).max(255).required(),
    location: Joi.string().required(),
    site: Joi.string().required(),
    phone: Joi.string().pattern(/^\+998[0-9]{9}$/).required(),
    schema: Joi.string().required(),
    region_id: Joi.number().integer().required(),
    district_id: Joi.number().integer().required(),
  })
  return schema.validate(data)
}

module.exports = validateVenue
