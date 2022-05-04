// const con = require('./sum')

const os = require('os')
const user = os.hostname()

console.log(user);
console.log(`The System uptime is ${os.uptime()/3600} days`);