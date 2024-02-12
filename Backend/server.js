import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import {database} from "./connexion.js"
import dotenv from 'dotenv'


const { PORT } = dotenv.config().parsed
const app = express()
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.get('/salutation',(req,res)=>{
    res.send('Bonjour tout le monde')
})


app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
    
   
  });
  
