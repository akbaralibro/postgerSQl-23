const { SeatType } = require('../models')
const validateSeatType = require('../validation/seatType.validation')

// Create SeatType
const createSeatType = async (req, res) => {
  const { error } = validateSeatType(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const newSeatType = await SeatType.create(req.body)
    res.status(201).json(newSeatType)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get all SeatTypes
const getSeatType = async (req, res) => {
  try {
    const seatTypes = await SeatType.findAll()
    res.status(200).json(seatTypes)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Get SeatType by ID
const getSeatTypeById = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id)
    if (!seatType) return res.status(404).send('SeatType not found')

    res.status(200).json(seatType)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Update SeatType
const updateSeatType = async (req, res) => {
  const { error } = validateSeatType(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const seatType = await SeatType.findByPk(req.params.id)
    if (!seatType) return res.status(404).send('SeatType not found')

    await seatType.update(req.body)
    res.status(200).json(seatType)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Delete SeatType
const deleteSeatType = async (req, res) => {
  try {
    const seatType = await SeatType.findByPk(req.params.id)
    if (!seatType) return res.status(404).send('SeatType not found')

    const deletedSeatType = seatType.toJSON()
    await seatType.destroy()
    res.status(200).json(deletedSeatType)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  createSeatType,
  getSeatType,
  getSeatTypeById,
  updateSeatType,
  deleteSeatType,
}
