const Joi = require("joi")

const validateCustomerCard = (data) => {
  const schema = Joi.object({
  customer_id: Joi.number().integer().required(),
  name: Joi.string().min(2).max(100).required(),
  phone: Joi.string().pattern(/^\+998[0-9]{9}$/).required(),
  number: Joi.string().required(),
  year: Joi.string().pattern(/^[0-9]{4}$/).required(), 
  month: Joi.string().pattern(/^(0[1-9]|1[0-2])$/).required(), 
  is_active: Joi.boolean().default(true),
  is_main: Joi.boolean().default(false),
  })
  return schema.validate(data)
}

module.exports =  validateCustomerCard 
