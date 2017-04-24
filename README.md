## Installation

```sh
$ npm install -g @boundlessgeo/sdk-generator
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

Rock and Roll

```bash
$ npm start
```

Create a package to deploy

```bash
$ npm run build
$ npm run createzip -- --output-file=/tmp/mywebapp.zip
```

## Command Line Options

This generator can also be further configured with the following command line flags.

    -h, --help     output usage information
    -V, --version  output the version number
    -f, --force    force on non-empty directory
    -d, --debug    output more debug info
