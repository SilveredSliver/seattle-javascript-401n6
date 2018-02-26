const http = require('http');
const url = require('url');
const querystring = require('querystring');
const Router = require('./lib/router');

function text(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.write('hi');
  res.end();
}

function json(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write(JSON.stringify({data: [1,2,3]}));
  res.end();
}

router = new Router();
router.get('/text', text);
router.get('/json', json);

const server = http.createServer((req, res) => {
  console.log('URL:', req.url);
  try {
    router.route(req, res);
  } catch (error) {
    console.log('error:', error)
    if (error.startsWith("404")) {
      res.writeHead(404);
      res.write(error);
      res.end();
      return;
    }
  }
});

const PORT = 3000 || process.env;
server.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
})