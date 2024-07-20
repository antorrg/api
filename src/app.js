import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import router from './router.js'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
console.log(dirname)

const app = express()
app.use(morgan('dev'))
app.use(express.static(path.join(dirname, '/public')))
app.use(express.urlencoded({extended: true}))

app.use(router)


export default app;

