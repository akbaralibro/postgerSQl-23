const { Op } = require('sequelize')
const { PayMethod } = require('../models')
const validatePayMethod = require('../validation/paymentMethod.validation')

// CREATE
const createPayMethod = async (req, res) => {
  const { error } = validatePayMethod(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const newPayMethod = await PayMethod.create(req.body)
    res.status(201).json(newPayMethod)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// GET ALL
const getPayMethods = async (req, res) => {
  try {
    const methods = await PayMethod.findAll()
    res.status(200).json(methods)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// GET BY ID
const getPayMethodByPk = async (req, res) => {
  try {
    const method = await PayMethod.findByPk(req.params.id)
    if (!method) return res.status(404).send('PayMethod not found')
    res.status(200).json(method)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// UPDATE
const updatePayMethod = async (req, res) => {
  const { error } = validatePayMethod(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const method = await PayMethod.findByPk(req.params.id)
    if (!method) return res.status(404).send('PayMethod not found')

    await method.update(req.body)
    res.status(200).json({ message: 'PayMethod updated', method })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// DELETE
const deletePayMethod = async (req, res) => {
  try {
    const method = await PayMethod.findByPk(req.params.id)
    if (!method) return res.status(404).send('PayMethod not found')

    const deletedData = method.toJSON()
    await method.destroy()

    res.status(200).json({ message: 'PayMethod deleted', deletedData })
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  createPayMethod,
  getPayMethods,
  getPayMethodByPk,
  updatePayMethod,
  deletePayMethod,
}
