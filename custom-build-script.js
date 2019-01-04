const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const files =[
    './dist/test-ng-elements/runtime.js',
    './dist/test-ng-elements/polyfills.js',
    './dist/test-ng-elements/main.js'
  ];

  await fs.ensureDir('dist-element');

  await concat(files, 'dist-element/test-ng-element.js');
  console.info('Angular Elements created successfully!');

})();
