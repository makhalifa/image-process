import express, { Router, Request, Response } from 'express'
import image from './api/resize'
import resizeQueryValidator from '../middlewares/resizeQueryValidator'

const routes: Router = express.Router()

routes.get('/', (req: Request, res: Response) => {
    res.send(`main api route`)
})

routes.use('/resize', resizeQueryValidator, image)

export default routes
