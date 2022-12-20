import express, { Application, Request, Response } from 'express'
import routes from './routes/index'
import * as dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

const app: Application = express()
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

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

export default app
