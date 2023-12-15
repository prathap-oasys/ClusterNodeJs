

const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("Home Page");
    }else if(req.url==='/slowpage'){
        res.writeHead(200,{"content-type":"text/plain"});
        for(let i=0;i<=5000000000;i++){}
       

        res.end("Slow Page");

    }
})

    server.listen(3000);

