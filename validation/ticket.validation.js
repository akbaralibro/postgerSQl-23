const Joi = require("joi")

const validateTicket = (data) => {
  const schema = Joi.object({
    event_id: Joi.number().integer().required(),
    seat_id: Joi.number().integer().required(),
    price: Joi.number().integer().min(0).required(),
    service_free: Joi.number().integer().min(0).optional(),
    status_id: Joi.number().integer().required(),
    ticket_type: Joi.number().integer().optional(),
  })
  return schema.validate(data)
}

module.exports = validateTicket
