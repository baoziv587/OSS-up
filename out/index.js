"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var handlers_1 = require("./handlers");
var packageJson = require('../package');
function push(x, xs) {
    xs.push(x);
    return xs;
}
program
    .version(packageJson.version)
    .usage('<command> [options]');
program
    .command('up')
    .description('上传 dist 目录下的所有css,js,fonts,img 到阿里云OSS\n'
    + '默认会读取根目录下的oss.json文件来获取bucket相关信息\n'
    + '当oss.json不存在时读取命令行参数,详见 <up> --help')
    .option('-r, --region <OSSRegion>', 'OSS region')
    .option('-i, --accessId <AccessId>', 'accessKeyId')
    .option('-s, --secret <AccessKeySecret>', 'accessKeySecret')
    .option('-b, --bucket <Bucket>', 'bucket')
    .option('-e, --exclude <Pattern> [Patterns...] ', 'ignore these files that matched RegExp patterns', push, [])
    .option('-c, --include <Pattern> [Patterns...] ', 'contains these files that matched RegExp patterns', push, [])
    .action(handlers_1.up);
program.parse(process.argv);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBcUM7QUFDckMsdUNBQStCO0FBQy9CLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUV6QyxjQUFjLENBQUMsRUFBRSxFQUFFO0lBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDVixNQUFNLENBQUMsRUFBRSxDQUFBO0FBQ1gsQ0FBQztBQUVELE9BQU87S0FDSixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztLQUM1QixLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUMvQixPQUFPO0tBQ0osT0FBTyxDQUFDLElBQUksQ0FBQztLQUNiLFdBQVcsQ0FDViwwQ0FBMEM7TUFDeEMscUNBQXFDO01BQ3JDLHFDQUFxQyxDQUN4QztLQUNBLE1BQU0sQ0FBQywwQkFBMEIsRUFBRSxZQUFZLENBQUM7S0FDaEQsTUFBTSxDQUFDLDJCQUEyQixFQUFFLGFBQWEsQ0FBQztLQUNsRCxNQUFNLENBQUMsZ0NBQWdDLEVBQUUsaUJBQWlCLENBQUM7S0FDM0QsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFFBQVEsQ0FBQztLQUN6QyxNQUFNLENBQUMsd0NBQXdDLEVBQUUsaURBQWlELEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztLQUM3RyxNQUFNLENBQUMsd0NBQXdDLEVBQUUsbURBQW1ELEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztLQUMvRyxNQUFNLENBQUMsYUFBRSxDQUFDLENBQUE7QUFFYixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSJ9