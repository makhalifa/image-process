import express, { Router, Request, Response } from 'express'
import { existsSync } from 'fs'
import path from 'path'
import sharp from 'sharp'
import getImageDir from '../../utils/getImagesDir'
import isImageExist from '../../utils/imgExistFunc'
import sharpIt from '../../utils/sharpFunc'

const router: Router = express.Router()

/**
 * @route GET /api/resize
 * @description
 * * This route is used to resize an image
 * * It takes a query parameter of the image url
 * * @quaryParam {filename, height, width} url
 * * It returns a resized image
 */

const dir = getImageDir()
const imageDir = path.join(dir, 'images')
const cache = path.join(dir, 'cache')

router.get('/', async (req: Request, res: Response) => {
    const { filename, height, width } = req.query
    console.log(req.query)
    const imgLocation = path.join(imageDir, (filename as string) + '.jpg')
    const cacheLocation = path.join(cache, `${filename}_${width}x${height}` + '.png')

    if (existsSync(cacheLocation)) {
        console.log('img exists in cache')
        res.sendFile(cacheLocation)
    } else if (existsSync(imgLocation)) {
        console.log('img exists in images')
        sharpIt(
            filename as string,
            Number(width),
            Number(height),
            (err: Error) => {
                if (err) {
                    res.status(400).send(err.message)
                }
                res.sendFile
            },
            (resizedImg: string) => {
                res.sendFile(resizedImg)
            }
        )
    } else {
        console.log('img not found')
        res.status(406).json({ msg: 'Image not found' })
    }
})

export default router