const http = require('http');
const fs = require('fs');

const hostname ='127.0.0.1';
const port = 3000;
const index = fs.readFileSync('index.html');
const contact = fs.readFileSync('./contact.html');
const About = fs.readFileSync('./About.html');
const join = fs.readFileSync('./join.html');
const mission = fs.readFileSync('./mission.html');
const gallery = fs.readFileSync('./gallery.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    if (url == '/'){
        res.end(index);
    }
    else if (url == '/About'){
        res.end(About);
    }
    else if (url == '/contact'){
        res.end(contact);
    }
    else if (url == '/gallery'){
        res.end(gallery);
    }
    else if (url == '/join'){
        res.end(join);
    }
    else if (url == '/mission'){
        res.end(mission);
    }
    else{
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');
    }
    
});

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});