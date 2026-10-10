import express from 'express'
import messegeRoutes from '../routes/api/v1/Messages.js'

const router = express.Router()

// Use the messages routes
router.use('/api/V1/messages', messegeRoutes)

export default router
