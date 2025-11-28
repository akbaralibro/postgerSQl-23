const Joi = require("joi")

const validateCustomerAddress = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    name: Joi.string().min(2).max(100).optional(),
    region_id: Joi.number().integer().required(),
    district_id: Joi.number().integer().required(),
    street: Joi.string().max(150).optional(),
    house: Joi.string().max(50).optional(),
    flat: Joi.number().integer().optional(),
    location: Joi.string().optional(),
    postIndex: Joi.string().max(20).optional(),
    info: Joi.string().max(255).optional(),
  })
  return schema.validate(data)
}

module.exports =  validateCustomerAddress 
