"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = require("path");
var Assets = (function () {
    function Assets(publicPath, rootPath) {
        this.publicPath = publicPath;
        this.rootPath = rootPath;
        var localPath = path.join(process.cwd(), rootPath, this.publicPath);
        if (fs_1.existsSync(localPath)) {
            this.stats = fs_1.lstatSync(localPath);
            if (this.stats.isDirectory()) {
                this._fileNames = fs_1.readdirSync(localPath);
            }
            else if (this.stats.isFile()) {
                this._fileNames = [localPath];
            }
            else {
                throw new Error("unsupported type ," + localPath + " should be a directory or file");
            }
        }
        else {
            console.log("dir " + localPath + " not exist");
            this._fileNames = [];
        }
        return this;
    }
    Assets.prototype.setFilter = function (filter) {
        if (typeof filter !== 'function') {
            throw new TypeError("filter must be a function");
        }
        else {
            this.filter = filter;
        }
        return this;
    };
    Object.defineProperty(Assets.prototype, "fileNames", {
        get: function () {
            return this.filter ? this.filter(this._fileNames) : this._fileNames;
        },
        enumerable: true,
        configurable: true
    });
    Assets.prototype.getAbsolutePath = function (fileName) {
        return path.join(process.cwd(), this.rootPath + "/" + this.publicPath, fileName);
    };
    return Assets;
}());
exports.default = Assets;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Fzc2V0cy9hc3NldHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5QkFBOEQ7QUFDOUQsMkJBQTZCO0FBRTdCO0lBT0UsZ0JBQW1CLFVBQVUsRUFBUyxRQUFnQjtRQUFuQyxlQUFVLEdBQVYsVUFBVSxDQUFBO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNwRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRXJFLEVBQUUsQ0FBQyxDQUFDLGVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFakMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUUxQyxDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7WUFFL0IsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXFCLFNBQVMsbUNBQWdDLENBQUMsQ0FBQTtZQUNqRixDQUFDO1FBRUgsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFPLFNBQVMsZUFBWSxDQUFDLENBQUE7WUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDdEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUE7SUFDYixDQUFDO0lBR00sMEJBQVMsR0FBaEIsVUFBaUIsTUFBTTtRQUNyQixFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sSUFBSSxTQUFTLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtRQUNsRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUN0QixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3JFLENBQUM7OztPQUFBO0lBRU0sZ0NBQWUsR0FBdEIsVUFBdUIsUUFBZ0I7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFLLElBQUksQ0FBQyxRQUFRLFNBQUksSUFBSSxDQUFDLFVBQVksRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUNsRixDQUFDO0lBRUgsYUFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFFRCxrQkFBZSxNQUFNLENBQUEifQ==