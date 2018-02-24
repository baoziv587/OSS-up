# About 

If your front-end project is built based on VUE, OSS-UP can help you to quickly upload all the files under `dist / js`,` dist / css`, `dist / fonts`,` dist / img` to Alibaba Cloud OSS .

<br>

By default, bucket-related information is read from the oss.json file in the directory

If oss.json does not exist, bucket related information is read from the command line arguments.

For more information, see `oss-up <up> --help`

# Quick start

```json
// oss.json
{
  "region": "oss-cn-beijing",
  "accessId": "*****",
  "secret": "******",
  "bucket": "******",
  "exclude":["*.js.map"],          // optional
  "include":["a.css","foo/bar.js"] // optional
}
```

```sh
$ oss-up up
```

# Todo
More generic, not just VUE-based projects
