const Joi = require("joi")

const validateCustomer = (data) => {
  const schema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  phone: Joi.string().pattern(/^\+998[0-9]{9}$/).required(),
  password: Joi.string().min(6).required(), 
  email: Joi.string().email().required(),
  birthDate: Joi.date().iso().optional(), 
  gender: Joi.string().valid('male', 'female', 'other').optional(),
  lang_id: Joi.number().integer().optional(),
  })
  return schema.validate(data)
}

module.exports =  validateCustomer 
