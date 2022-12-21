import path from 'path'
import fs from 'fs'

const getImageDir = (dir = __dirname): string => {
    let imgDir = ''
    const files = fs.readdirSync(dir)
    if (files.includes('assets')) {
        imgDir = path.join(dir, 'assets')
        return imgDir
    } else {
        return getImageDir(path.join(dir, '..'))
    }
}

export default getImageDir