const Joi = require("joi")

const validateCart = (data) => {
  const schema = Joi.object({
    customer_id: Joi.number().integer().required(),
    status_id: Joi.number().integer().required(),
  })
  return schema.validate(data)
}

module.exports =  validateCart 
