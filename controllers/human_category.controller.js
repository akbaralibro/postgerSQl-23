const { HumanCategory } = require('../models')
const validateHumanCategory = require('../validation/humanCategory.validation')

// Create HumanCategory
const createHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body)
  if (error) return res.status(400).json({ message: error.details[0].message })

  try {
    const newHumanCategory = await HumanCategory.create(req.body)
    res.status(201).json(newHumanCategory)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get All HumanCategories
const getHumanCategory = async (req, res) => {
  try {
    const humanCategories = await HumanCategory.findAll()
    res.status(200).json(humanCategories)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Get HumanCategory By Id
const getHumanCategoryById = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id)
    if (!humanCategory) {
      return res.status(404).json({ message: 'HumanCategory not found' })
    }
    res.status(200).json(humanCategory)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Update HumanCategory
const updateHumanCategory = async (req, res) => {
  const { error } = validateHumanCategory(req.body)
  if (error) return res.status(400).json({ message: error.details[0].message })

  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id)
    if (!humanCategory) {
      return res.status(404).json({ message: 'HumanCategory not found' })
    }

    await humanCategory.update(req.body)
    res.status(200).json(humanCategory)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// Delete HumanCategory
const deleteHumanCategory = async (req, res) => {
  try {
    const humanCategory = await HumanCategory.findByPk(req.params.id)
    if (!humanCategory) {
      return res.status(404).json({ message: 'HumanCategory not found' })
    }

    const deletedData = humanCategory.toJSON()
    await humanCategory.destroy()

    res.status(200).json(deletedData)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = {
  createHumanCategory,
  getHumanCategory,
  getHumanCategoryById,
  updateHumanCategory,
  deleteHumanCategory,
}
