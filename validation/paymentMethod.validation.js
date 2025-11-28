const Joi = require("joi")

const validatePayMethod = (data) => {
  const schema = Joi.object({
  name: Joi.string().min(3).max(50).required()
  })
  return schema.validate(data)
}

module.exports =  validatePayMethod 
