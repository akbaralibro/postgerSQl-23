const Joi = require("joi")

const validateBooking = (data) => {
  const schema = Joi.object({
    cart_id: Joi.number().integer().required(),
    payment_method_id: Joi.number().integer().required(),
    delivery_method_id: Joi.number().integer().required(),
    discount_coupon_id: Joi.number().integer().optional(),
    status_id: Joi.number().integer().required(),
  })
  return schema.validate(data)
}

module.exports =  validateBooking 
