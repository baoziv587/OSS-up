"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var co = require("co");
var OSS = require("ali-oss");
var matcher = require("micromatch");
var assets_1 = require("./assets/assets");
var EXCLUDE = [
    '.*',
];
var INCLUDE = [];
var q = [];
var resources = [];
function addFilesToUpload(resource) {
    resource.fileNames.forEach(function (name) {
        var shouldSkip = EXCLUDE.some(function (pattern) { return matcher.isMatch(name, pattern); });
        var shouldInclude = INCLUDE.some(function (pat) { return matcher.isMatch(name, pat); });
        if (shouldSkip) {
            if (!shouldInclude) {
                if (process.env.NODE_ENV === 'debug') {
                    console.log("!Ignore file :  " + name);
                }
                return;
            }
        }
        q.push([
            "/static/" + resource.publicPath + "/" + name,
            resource.getAbsolutePath(name)
        ]);
    });
}
function startUploadToBucket(_a) {
    var region = _a.region, accessId = _a.accessId, secret = _a.secret, bucket = _a.bucket;
    if (q.length === 0) {
        console.log('No files to upload');
    }
    var client = new OSS({
        region: region,
        accessKeyId: accessId,
        accessKeySecret: secret,
        bucket: bucket
    });
    return co(function () {
        var item, key, file, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(q.length !== 0)) return [3, 2];
                    item = q.pop();
                    if (!item) {
                        return [3, 2];
                    }
                    key = item[0];
                    file = item[1];
                    console.log(file);
                    return [4, client.put(key, file)];
                case 1:
                    result = _a.sent();
                    console.log(file, '=====ok');
                    return [3, 0];
                case 2: return [2];
            }
        });
    })
        .catch(function (err) {
        console.log(err);
        process.exit(1);
    });
}
exports.startUploadToBucket = startUploadToBucket;
function getAllResource(rootDir, exclude, include) {
    if (rootDir === void 0) { rootDir = 'dist/static/'; }
    if (exclude === void 0) { exclude = []; }
    if (include === void 0) { include = []; }
    exclude.forEach(function (s) { return EXCLUDE.push(s); });
    include.forEach(function (s) { return INCLUDE.push(s); });
    addFilesToUpload(new assets_1.default('css', rootDir));
    addFilesToUpload(new assets_1.default('js', rootDir));
    addFilesToUpload(new assets_1.default('img', rootDir));
    addFilesToUpload(new assets_1.default('fonts', rootDir));
}
exports.getAllResource = getAllResource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3VwbG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVCQUF5QjtBQUN6Qiw2QkFBK0I7QUFDL0Isb0NBQXNDO0FBSXRDLDBDQUFvQztBQUVwQyxJQUFNLE9BQU8sR0FBRztJQUNkLElBQUk7Q0FDTCxDQUFBO0FBRUQsSUFBTSxPQUFPLEdBQUcsRUFFZixDQUFBO0FBRUQsSUFBTSxDQUFDLEdBQUcsRUFFVCxDQUFBO0FBRUQsSUFBTSxTQUFTLEdBQUcsRUFFakIsQ0FBQTtBQUVELDBCQUEwQixRQUFnQjtJQUV4QyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVk7UUFDdEMsSUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUE7UUFDMUUsSUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUExQixDQUEwQixDQUFDLENBQUE7UUFFckUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNmLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsSUFBTSxDQUFDLENBQUE7Z0JBQ3hDLENBQUM7Z0JBQ0QsTUFBTSxDQUFBO1lBQ1IsQ0FBQztRQUNILENBQUM7UUFFRCxDQUFDLENBQUMsSUFBSSxD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