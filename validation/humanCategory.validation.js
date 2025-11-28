const Joi = require("joi")

const validateHumanCategory = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    startAge: Joi.number().integer().min(0).max(150).required(),
    finishAge: Joi.number().integer().min(Joi.ref('startAge')).max(150).required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
  })
  return schema.validate(data)
}

module.exports =  validateHumanCategory 
