import express from 'express'
import { Router, Request, Response, NextFunction } from 'express'
import { query, validationResult } from 'express-validator'

const router: Router = express.Router()

router.get(
    '/',
    query('filename').exists().withMessage('filename required').isString().withMessage('filename must be a string'),
    query('width')
        .exists()
        .withMessage('width required')
        .isNumeric()
        .withMessage('width must be a number')
        .isInt({ min: 1 })
        .withMessage('width must be an integer'),
    query('height')
        .exists()
        .withMessage('height required')
        .isNumeric()
        .withMessage('height must be a number')
        .isInt({ min: 1 })
        .withMessage('width must be an integer'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            // return error msg
            // return res.status(400).json({ errors: errors.array() })
            return res.status(400).send(
                errors.array().map((error) => {
                    return `${error.msg}`
                })
            )
        }
        next()
    }
)
export default router
