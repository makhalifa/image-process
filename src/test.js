const path = require('path')
const fs = require('fs')

const image = 'discord1'
const imgLocation = path.resolve('./') + `/src/assets/images/${image}`+(".png"||".jpg"||".jpeg")
const cachLocation = path.resolve('./') + `/src/assets/cache/${image}.png`

if (fs.existsSync(imgLocation) == true)
{
    console.log("File exists in images")
}else console.log("File does not exist in images")
if(fs.existsSync(cachLocation) == true)
{
    console.log("File exists in cache")
}else console.log("File does not exist in cache")
