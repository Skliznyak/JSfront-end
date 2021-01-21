'use strict';


const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);

    if (request.url == '/style.css')
    {
        const text = fs.readFileSync('style.css', 'utf8');
        response.end(text);
    }
    if (request.url == '/') {
        const text = fs.readFileSync('index.html', 'utf8');
        response.end(text);
    }

});
server.listen(process.env.PORT || 3000);
console.log('server started');
