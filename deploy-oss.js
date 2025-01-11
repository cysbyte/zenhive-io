import fs from 'fs'
import path from 'path'
import util from 'util'
import OSS from 'ali-oss'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const promisifyReaddir = util.promisify(fs.readdir)
const promisifyStat = util.promisify(fs.stat)

const ALIOSSKEY = {
  region: 'oss-ap-southeast-1',
  key: 'LTAI5tLcLeq4tMubhm7P7MKL',
  secret: 'v5IW1DiSKpOREwGuB4wJlhDuzEwhMA',
  bucket: 'azen'
}
const bucketPath =  process.argv[2]

const client = new OSS({
  region: ALIOSSKEY.region,
  accessKeyId: ALIOSSKEY.key,
  accessKeySecret: ALIOSSKEY.secret,
  bucket: ALIOSSKEY.bucket
})

const publicPath = path.resolve(__dirname, './dist')

async function run(proPath = '') {
  const dir = await promisifyReaddir(`${publicPath}${proPath}`)

  for (let i = 0; i < dir.length; i++) {
    const stat = await promisifyStat(path.resolve(`${publicPath}${proPath}`, dir[i]))

    if (stat.isFile()) {
      const fileStream = fs.createReadStream(path.resolve(`${publicPath}${proPath}`, dir[i]))
      console.log(`上传文件: ${proPath}/${dir[i]}`)
      const result = await client.putStream(`${bucketPath}${proPath}/${dir[i]}`, fileStream)
    } else if (stat.isDirectory()) {
      await run(`${proPath}/${dir[i]}`)
    }
  }
}

run()
