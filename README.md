#porygon

> when markdown meets reaveal.js


### Prerequisite

1. Node.js `v4`
2. NPM `v3`
3. `gulp-cli` and `bower`

   ```
$ npm install --global gulp-cli bower
   ```


### Getting Started

- Development

   ```
$ gulp serve
   ```


- Build for production

   ```
$ gulp
	```
	
- Review the production build
	
   ```
$ gulp serve:dist
   ```
   

### Structure

```
app
├── apple-touch-icon.png
├── favicon.ico
├── fonts
├── images
├── index.html
├── robots.txt
├── scripts
│   ├── main.js
│   ├── markdowner.js
│   └── require.js
└── styles
    ├── _variables.scss
    ├── canvas.scss
    └── main.scss
```