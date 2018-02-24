import co = require('co')
import OSS = require('ali-oss')
import matcher = require('micromatch')
import fs = require('fs')
import path = require('path')
import { existsSync } from 'fs'
import Assets from './assets/assets'

const EXCLUDE = [
  '.*',//private file
]

const INCLUDE = [

]

const q = [

]

const resources = [

]

function addFilesToUpload(resource: Assets) {

  resource.fileNames.forEach((name: string) => {
    const shouldSkip = EXCLUDE.some(pattern => matcher.isMatch(name, pattern))
    const shouldInclude = INCLUDE.some(pat => matcher.isMatch(name, pat))

    if (shouldSkip) {
      if (!shouldInclude) {
        if (process.env.NODE_ENV === 'debug') {
          console.log(`!Ignore file :  ${name}`)
        }
        return
      }
    }

    q.push([
      `/static/${resource.publicPath}/${name}`,
      resource.getAbsolutePath(name)
    ])
  })
}


export function startUploadToBucket({ region, accessId, secret, bucket }) {
  if (q.length === 0) {
    console.log('No files to upload')
  }

  const client = new OSS({
    region,
    accessKeyId: accessId,
    accessKeySecret: secret,
    bucket
  })

  return co(function* () {
    while (q.length !== 0) {
      const item = q.pop()
      if (!item) {
        break
      }
      const key = item[0]
      const file = item[1]
      console.log(file)
      const result = yield client.put(key, file)
      console.log(file, '=====ok');
    }
  })
    .catch(function (err) {
      console.log(err);
      process.exit(1)
    });
}

export function getAllResource(
  rootDir: string = 'dist/static/',
  exclude: string[] = [],
  include: string[] = []
) {
  exclude.forEach(s => EXCLUDE.push(s))
  include.forEach(s => INCLUDE.push(s))
  addFilesToUpload(new Assets('css', rootDir))
  addFilesToUpload(new Assets('js', rootDir))
  addFilesToUpload(new Assets('img', rootDir))
  addFilesToUpload(new Assets('fonts', rootDir))
}
