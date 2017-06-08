## Installation

```sh
$ npm install -g @boundlessgeo/sdk-generator-webpack
```

## Quick Start

The quickest way to get started with the Boundless SDK is to utilize the executable `web-sdk` to generate an application as shown below:

Create the app:

```bash
$ web-sdk /tmp/foo && cd /tmp/foo
```

Install dependencies:

```bash
$ npm i
```

Starts up webpack dev server on port 3000

```bash
$ npm start
```

Create a package to deploy

```bash
$ npm run build -- --env.output-file=/tmp/mywebapp.zip
```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help     output usage information
    -V, --version  output the version number
    -f, --force    force on non-empty directory
    -d, --debug    output more debug info
