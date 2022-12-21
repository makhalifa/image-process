import express, { Application, Request, Response } from 'express'
import routes from './routes/index'
import * as dotenv from 'dotenv'
import morgan from 'morgan'
import http, { Server } from 'http'

dotenv.config()

const app: Application = express()
const server:Server = http.createServer(app)
const port = process.env.PORT || 3000

/// Third-party middleware ///
app.use(morgan('dev'))

/// Built-in middleware ///
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!')
})

app.use('/api', routes)

// server start
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


export default app
