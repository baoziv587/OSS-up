import *  as ora from 'ora'
import { existsSync } from 'fs'
import { join } from 'path'
import { startUploadToBucket, getAllResource } from '../upload'
import nullthrows from '../nullthrows'

export function up(cmd, ...args) {
  const spinner = ora(
    {
      text: 'Uploading all assets to Ali OSS \n',
      interval: 500
    }).start()
  let { region, accessId, secret, bucket, rootDir, include, exclude } = cmd
  const jsonPath = join(process.cwd(), '/', 'oss.json')
  
  if (existsSync(jsonPath)) {
    const json = require(jsonPath)
    region = json.region
    accessId = json.accessId
    secret = json.secret
    bucket = json.bucket
    rootDir = json.rootDir

    if (json.include && json.include.length > 0) {
      include = json.include
    }

    if (json.exclude && json.exclude.length > 0) {
      exclude = json.exclude
    }
  }

  nullthrows(!!region, '<OSSRegion> is required')
  nullthrows(!!accessId, '<AccessId> is required')
  nullthrows(!!secret, '<AccessKeySecret> is required')
  nullthrows(!!bucket, '<bucket> is required')
  getAllResource(rootDir, exclude, include)
  startUploadToBucket({ region, accessId, secret, bucket, }).then(() => {
    spinner.succeed('Upload succeed')
  })
}