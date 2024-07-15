import app from './app.js'
import {config}from 'dotenv'
config()

const Port = process.env.PORT || 3000;

app.listen(Port, ()=>{
    console.log(`Server is listening in:  "http://localhost:${Port}"`)
});