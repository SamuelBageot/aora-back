import express, { Express, Response } from "express"
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const port = process.env.PORT || 8000

// Access JSON data in the request body
app.use(express.json())

app.use('/', (req, res: Response, next) => res.send('Express server working'))

const startServer = async () => {
    try {
        app.listen(port, () => console.log('Server started'))
    } catch (err) {
        console.log(err)
    }
}

startServer()