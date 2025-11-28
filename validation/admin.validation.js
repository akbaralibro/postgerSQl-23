const Joi = require("joi")

const validateAdmin = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    login: Joi.string().min(3).max(50).required(),
    password: Joi.string().min(6).required(),
    is_active: Joi.boolean().default(true),
    is_creator: Joi.boolean().default(false),
  })
  return schema.validate(data)
}

module.exports = validateAdmin 
