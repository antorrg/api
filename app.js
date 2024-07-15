import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
console.log(dirname)

const app = express()
app.use(morgan('dev'))
app.use(express.static(path.join(dirname, '/src/public')))
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{
    res.sendFile(path.join(dirname, '/src/public', 'index.html'))
})

app.get('/detalle', (req,res)=>{
    res.sendFile(path.join(dirname, '/src/public', 'album.html'))
})


export default app;