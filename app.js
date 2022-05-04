const http = require('http')
const _ = require('lodash')

const items = [1,[2,[3,4,[5]]]]
console.log(_.flattenDeep(items))

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to Home Page')
    }
    else if(req.url === '/about'){
        res.end('About Page')
    }
    else 
        res.end('Check this')
})


server.listen(5000)