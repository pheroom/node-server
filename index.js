import http from 'http'

const port = 80

const server = http.createServer(options, (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    if(req.url === '/get-post'){
        res.setHeader('Content-Type', 'text/plain;charset=utf-8');
        res.end('post 1: hello :/')
    }
    // else if(req.url === '/publish' && req.method === 'POST'){
    //     req.setEncoding('utf8');
    //     let message = '';
    //     req.on('data', function(chunk) {
    //         message += chunk;
    //     }).on('end', function() {
    //         publish(message);
    //         res.end("ok");
    //     })}
    else{
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end('server work')
    }
})


server.listen(port, () => console.log('work on port: ' + port))