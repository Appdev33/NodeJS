const {readFile,writeFile} = require('fs')

readFile(
    './content/subfolder/test1.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result) 

const sec = result
writeFile(
    './content/subfolder/resultasync.txt',
    `here is the results of async writes:${sec}`,
    (err,result) =>{
        if(err){
            console.log(err)
            return
        }
        console.log(sec)
    })
})