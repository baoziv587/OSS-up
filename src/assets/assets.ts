import { existsSync, readdirSync, lstatSync, Stats } from 'fs'
import path = require('path')

class Assets {
  private filter: (xs: string[]) => string[]
  private _fileNames: string[]
  public type: string
  public stats: Stats


  constructor(public publicPath, public rootPath: string, ) {
    const localPath = path.join(process.cwd(), rootPath, this.publicPath)

    if (existsSync(localPath)) {

      this.stats = lstatSync(localPath)

      if (this.stats.isDirectory()) {
        this._fileNames = readdirSync(localPath)

      } else if (this.stats.isFile()) {
        this._fileNames = [localPath]

      } else {
        throw new Error(`unsupported type ,${localPath} should be a directory or file`)
      }

    } else {
      console.log(`dir ${localPath} not exist`)
      this._fileNames = []
    }

    return this
  }


  public setFilter(filter) {
    if (typeof filter !== 'function') {
      throw new TypeError(`filter must be a function`)
    } else {
      this.filter = filter
    }
    return this
  }

  get fileNames() {
    return this.filter ? this.filter(this._fileNames) : this._fileNames
  }

  public getAbsolutePath(fileName: string) {
    return path.join(process.cwd(), `${this.rootPath}/${this.publicPath}`, fileName)
  }

}

export default Assets