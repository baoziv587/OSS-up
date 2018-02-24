import program = require('commander')
import { up } from './handlers'
const packageJson = require('../package')

function push(x, xs) {
  xs.push(x)
  return xs
}

program
  .version(packageJson.version)
  .usage('<command> [options]')
program
  .command('up')
  .description(
    '上传 dist 目录下的所有css,js,fonts,img 到阿里云OSS\n'
    + '默认会读取根目录下的oss.json文件来获取bucket相关信息\n'
    + '当oss.json不存在时读取命令行参数,详见 <up> --help'
  )
  .option('-r, --region <OSSRegion>', 'OSS region')
  .option('-i, --accessId <AccessId>', 'accessKeyId')
  .option('-s, --secret <AccessKeySecret>', 'accessKeySecret')
  .option('-b, --bucket <Bucket>', 'bucket')
  .option('-e, --exclude <Pattern> [Patterns...] ', 'ignore these files that matched RegExp patterns', push, [])
  .option('-c, --include <Pattern> [Patterns...] ', 'contains these files that matched RegExp patterns', push, [])
  .action(up)

program.parse(process.argv)