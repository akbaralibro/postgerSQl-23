const { EventType } = require('../models')
const validateEventType = require('../validation/eventType.validation')

// Create EventType
const createEventType = async (req, res) => {
	const { error } = validateEventType(req.body)
	if (error) return res.status(400).send(error.details[0].message)

	try {
		const newEventType = await EventType.create(req.body)
		res.status(201).json(newEventType)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

// Get all EventTypes
const getEventType = async (req, res) => {
  try {
    const EventTypes = await EventType.findAll()
    res.status(200).json(EventTypes)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Get EventType by ID
const getEventTypeById = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id)
    if (!eventType) return res.status(404).send('EventType not found')

    res.status(200).json(eventType)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Update EventType
const updateEventType = async (req, res) => {
  const { error } = validateEventType(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  try {
    const eventType = await EventType.findByPk(req.params.id)
    if (!eventType) return res.status(404).send('EventType not found')

    await eventType.update(req.body)
    res.status(200).json(eventType)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

// Delete EventType
const deleteEventType = async (req, res) => {
  try {
    const eventType = await EventType.findByPk(req.params.id)
    if (!eventType) return res.status(404).send('EventType not found')

    const deletedEventType = eventType.toJSON()
    await eventType.destroy()
    res.status(200).json(deletedEventType)
  } catch (err) {
    res.status(500).send(err.message)
  }
}

module.exports = {
  createEventType,
  getEventType,
  getEventTypeById,
  updateEventType,
  deleteEventType,
}
