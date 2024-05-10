const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {

  if (req.method === 'GET' && req.url.startsWith('/static')) {
    const ext = req.url.split('/static').join('');

    if (ext.endsWith('.jpg')) {
      const doggo =  fs.readFileSync('./assets/images/dog.jpg');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/jpeg');
      return res.end(doggo);
    }

    if (ext.endsWith('.css')) {
      const css =  fs.readFileSync('./assets/css/application.css');
      res.statusCode == 200;
      res.setHeader('Content-Type', 'text/css');
      return res.end(css);
    }

  }

  const home = fs.readFileSync('./index.html', 'utf-8');

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(home);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
