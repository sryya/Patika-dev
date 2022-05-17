const http=require('http');
const port=5000;
const server=http.createServer((req,res)=>{
    const url=req.url;
    if (url==='/') {
        res.writeHead(200, { "Content-Type": "text/html", charset: "utf-8" });
        res.write('<h2>Welcome to Index Page</h2>');
    } else if(url==='/about') {
        res.writeHead(200, { "Content-Type": "text/html", charset: "utf-8" });
        res.write('<h2>Welcome to My about</h2>');
    }
    else if(url==='/contact')
    {
        res.writeHead(200, { "Content-Type": "text/html", charset: "utf-8" });
        res.write('<h2>Welcome to Cantact Page</h2>');
    }
    else{
        res.writeHead(404, { "Content-Type": "text/html", charset: "utf-8" });
        res.write('<h2>404 wrong</h2>');
    }
    res.end();
   
});

server.listen(port,()=>{
    console.log(`${port} numaralı port dinleniyor...`);
});