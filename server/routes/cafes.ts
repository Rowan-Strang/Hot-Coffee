import express from 'express'
import * as db from '../db/functions/cafes'

const router = express.Router()

// Get /api/v1/cafes
router.get('/', async (req, res) => {
  try {
    const cafes = await db.getAllCafes()
    res.json(cafes)
  } catch (error) {
    res.sendStatus(500)
  }
})

// Get /api/v1/cafes/:suburb
router.get('/suburb/:suburb', async (req, res) => {
  const suburb = String(req.params.suburb)
  try {
    console.log(suburb)
    const cafes = await db.getCafesBySuburb(suburb)
    res.json(cafes)
  } catch (error) {
    res.sendStatus(500)
  }
})

// GET /api/v1/cafes/:id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const cafe = await db.getCafeById(id)
    res.json(cafe)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
