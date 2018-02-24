"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ora = require("ora");
var fs_1 = require("fs");
var path_1 = require("path");
var upload_1 = require("../upload");
var nullthrows_1 = require("../nullthrows");
function up(cmd) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var spinner = ora({
        text: 'Uploading all assets to Ali OSS \n',
        interval: 500
    }).start();
    var region = cmd.region, accessId = cmd.accessId, secret = cmd.secret, bucket = cmd.bucket, rootDir = cmd.rootDir, include = cmd.include, exclude = cmd.exclude;
    var jsonPath = path_1.join(process.cwd(), '/', 'oss.json');
    if (fs_1.existsSync(jsonPath)) {
        var json = require(jsonPath);
        region = json.region;
        accessId = json.accessId;
        secret = json.secret;
        bucket = json.bucket;
        rootDir = json.rootDir;
        if (json.include && json.include.length > 0) {
            include = json.include;
        }
        if (json.exclude && json.exclude.length > 0) {
            exclude = json.exclude;
        }
    }
    nullthrows_1.default(!!region, '<OSSRegion> is required');
    nullthrows_1.default(!!accessId, '<AccessId> is required');
    nullthrows_1.default(!!secret, '<AccessKeySecret> is required');
    nullthrows_1.default(!!bucket, '<bucket> is required');
    upload_1.getAllResource(rootDir, exclude, include);
    upload_1.startUploadToBucket({ region: region, accessId: accessId, secret: secret, bucket: bucket, }).then(function () {
        spinner.succeed('Upload succeed');
    });
}
exports.up = up;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaGFuZGxlcnMvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBMkI7QUFDM0IseUJBQStCO0FBQy9CLDZCQUEyQjtBQUMzQixvQ0FBK0Q7QUFDL0QsNENBQXNDO0FBRXRDLFlBQW1CLEdBQUc7SUFBRSxjQUFPO1NBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztRQUFQLDZCQUFPOztJQUM3QixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQ2pCO1FBQ0UsSUFBSSxFQUFFLG9DQUFvQztRQUMxQyxRQUFRLEVBQUUsR0FBRztLQUNkLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNOLElBQUEsbUJBQU0sRUFBRSx1QkFBUSxFQUFFLG1CQUFNLEVBQUUsbUJBQU0sRUFBRSxxQkFBTyxFQUFFLHFCQUFPLEVBQUUscUJBQU8sQ0FBUTtJQUN6RSxJQUFNLFFBQVEsR0FBRyxXQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQTtJQUVyRCxFQUFFLENBQUMsQ0FBQyxlQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNwQixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUN4QixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNwQixNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUNwQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUV0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDeEIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTtRQUN4QixDQUFDO0lBQ0gsQ0FBQztJQUVELG9CQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSx5QkFBeUIsQ0FBQyxDQUFBO0lBQy9DLG9CQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO0lBQ2hELG9CQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSwrQkFBK0IsQ0FBQyxDQUFBO0lBQ3JELG9CQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxDQUFBO0lBQzVDLHVCQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUN6Qyw0QkFBbUIsQ0FBQyxFQUFFLE1BQU0sUUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE1BQU0sUUFBQSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQ25DLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQWxDRCxnQkFrQ0MifQ==