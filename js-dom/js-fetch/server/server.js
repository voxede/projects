import express from 'express'

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Is Working!' })
})

app.listen(PORT, () => {
    console.log(`Server Running in http://localhost:${PORT}`)
})