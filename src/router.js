// routes/index.js
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const router = express.Router()

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

router.get('/', (req, res) => {
    res.sendFile(path.join(dirname, '/public', 'index.html'))
})

router.get('/page2', (req, res) => {
    res.sendFile(path.join(dirname, '/public', 'index2.html'))
})

router.get('/page3', (req, res) => {
    res.sendFile(path.join(dirname, '/public', 'index3.html'))
})

export default router
