const Joi = require("joi")

const validateEvent = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(150).required(),
    photo: Joi.string().required(),
    startDate: Joi.string().required(),
    startTime: Joi.string().optional(),
    finishDate: Joi.date().iso().optional(),
    finishTime: Joi.string().optional(),
    info: Joi.string().max(500).optional(),
    event_type_id: Joi.number().integer().required(),
    human_category_id: Joi.number().integer().required(),
    venue_id: Joi.number().integer().required(),
    lang_id: Joi.number().integer().required(),
    release_id: Joi.number().integer().optional(),
  })
  return schema.validate(data)
}

module.exports = validateEvent 
