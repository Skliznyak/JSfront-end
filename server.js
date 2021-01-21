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
    else if (request.url == '/') {
        const text = fs.readFileSync('index.html', 'utf8');
        response.end(text);
    }
    else if (request.url == '/AR_Progect/task_5.html')
    {
        const text = fs.readFileSync('./AR_Progect/task_5.html', 'utf8');
        response.end(text);
    }
    else if (request.url == '/AR_Progect/AR.js-master/aframe/build/aframe-ar.min.js')
    {
        const text = fs.readFileSync('./AR_Progect/AR.js-master/aframe/build/aframe-ar.min.js', 'utf8');
        response.end(text);
    }
    else if (request.url == '/AR_Progect/aframe/aframe.min.js')
    {
        const text = fs.readFileSync('./AR_Progect/aframe/aframe.min.js', 'utf8');
        response.end(text);
    }
    else if (request.url == '/AR_Progect/js/script_5.js')
    {
        const text = fs.readFileSync('./AR_Progect/js/script_5.js', 'utf8');
        response.end(text);
    }
    else if (request.url == '/AR_Progect/images/pattern-photo5210865773793358070.patt')
    {
        const text = fs.readFileSync('./AR_Progect/images/pattern-photo5210865773793358070.patt', 'utf8');
        response.end(text);
    }
});
server.listen(process.env.PORT || 3000)
console.log('server started');
