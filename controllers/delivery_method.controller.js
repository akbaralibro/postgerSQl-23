const { Op } = require('sequelize')
const { DeliveryMethod } = require('../models')
const validateDeliveryMethod = require('../validation/deliveryMethod.validation')

// CREATE
const createDeliveryMethod = async (req, res) => {
  const { error } = validateDeliveryMethod(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const newDeliveryMethod = await DeliveryMethod.create(req.body)
    res.status(201).json(newDeliveryMethod)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET ALL
const getDeliveryMethods = async (req, res) => {
  try {
    const methods = await DeliveryMethod.findAll()
    res.status(200).json(methods)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// GET BY ID
const getDeliveryMethodByPk = async (req, res) => {
  try {
    const method = await DeliveryMethod.findByPk(req.params.id)
    if (!method) return res.status(404).send('DeliveryMethod not found')
    res.status(200).json(method)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// UPDATE
const updateDeliveryMethod = async (req, res) => {
  const { error } = validateDeliveryMethod(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const method = await DeliveryMethod.findByPk(req.params.id)
    if (!method) return res.status(404).send('DeliveryMethod not found')

    await method.update(req.body)
    res.status(200).json({ message: 'DeliveryMethod updated', method })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// DELETE
const deleteDeliveryMethod = async (req, res) => {
  try {
    const method = await DeliveryMethod.findByPk(req.params.id)
    if (!method) return res.status(404).send('DeliveryMethod not found')

    const deletedData = method.toJSON()

    await method.destroy()
    res.status(200).json({ message: 'DeliveryMethod deleted', deletedData })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  createDeliveryMethod,
  getDeliveryMethods,
  getDeliveryMethodByPk,
  updateDeliveryMethod,
  deleteDeliveryMethod,
}
