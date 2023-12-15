
const http=require('http');
const cluster=require('cluster');
const os=require('os');

if(cluster.isMaster){
    console.log(`cluster run ${process.pid}`);
    cluster.fork();
    cluster.fork();
}else{
    const server=http.createServer((req,res)=>{
        if(req.url ==="/"){
            res.writeHead(200,{"content-type":"text/plain"});
            res.end("Home Page");
        }else if(req.url==='/slowpage'){
            res.writeHead(200,{"content-type":"text/plain"});
            for(let i=0;i<=500000;i++){
              //console.log(i);
              

            }
            res.end("Slow Page");
           

           

        }

    })

    server.listen(3000);
}