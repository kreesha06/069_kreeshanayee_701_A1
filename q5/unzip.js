
const fs = require('fs');
const unzipper = require('unzipper');

fs.createReadStream('myfolder.zip')
  .pipe(unzipper.Extract({ path: 'unzipped' }))
  .on('close', () => {
    console.log('Unzip successfully');
  });
