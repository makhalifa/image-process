import path from 'path'
import sharp from 'sharp'
import getImageDir from './getImagesDir'

const dir = getImageDir()
const imageDir = path.join(dir, 'images')
const cache = path.join(dir, 'cache')

const sharpIt = (filename: string, width: number, height: number, errfunc: Function, passFunc: Function) => {
    const imgLocation = path.join(imageDir, filename + '.jpg')
    sharp(imgLocation)
        .resize(Number(width), Number(height))
        .toFile(path.join(cache, `${filename}_${width}x${height}.png`), (err, info) => {
            if (err) {
                // throw err
                errfunc(err)
            }
            console.log('img created')
            const resizedImg = path.join(cache, `${filename}_${width}x${height}.png`)
            passFunc(resizedImg)
        })
}

export default sharpIt