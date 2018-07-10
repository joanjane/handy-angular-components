var fs = require('fs'),
path = require('path');
fs.copyFileSync(
  path.resolve(__dirname,'./dist/handy-angular-components/index.html'),
  path.resolve(__dirname,'./dist/handy-angular-components/404.html'));