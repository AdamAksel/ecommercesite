import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send('API is running')
})

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
)
