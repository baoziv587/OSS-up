export default function error(cond: boolean, msg) {
  if (!cond) {
    throw new Error(msg + " , see details with --help")
  }
}
