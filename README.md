<h1 align="center">Welcome to a forked image-to-pdf lib 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-green.svg?cacheSeconds=2592000" />
</p>

> Creates a PDF file out of an image

## Why this fork ?
> Mainly because I was facing lot of issues regarding .jpg images (```Error: Unknown image format```)

## Instalation
```sh
npm install ZeitounCorp/image-to-pdf
```

## MIME supported
```
"image/png"
"image/jpeg"
"image/jpg"
```

## Example: (Buffer)
```js
const fs = require('fs');
const imgToPDF = require('ZeitounCorp/image-to-pdf');

const buffer = fs.readFileSync('/your/image/file/path');

imgToPDF(buffer, 'A4')
   .pipe(fs.createWriteStream('output.pdf'));

```
## Example: (Base64)
```js
const fs = require('fs');
const imgToPDF = require('ZeitounCorp/image-to-pdf');

const base_s_f = fs.readFileSync('/your/image/file/path').toString('base64');
/** OR */
const base_s_f = 'data:image/${image_type};base64.........'; // image_type IN ['png', 'jpeg', 'jpg'];

imgToPDF(base_s_f, 'A4')
   .pipe(fs.createWriteStream('output.pdf'));

```

A list of all accepted page sizes can be found [here](sizes.json).
