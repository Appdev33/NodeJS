const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/subfolder/test1.txt','utf8');
const second = readFileSync('./content/subfolder/tets2.txt','utf8');

writeFileSync(
    './content/subfolder/resultsync.txt',
    `here is the result: ${first},${second}`
    )
console.log(first)
console.log(second)

