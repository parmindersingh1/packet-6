var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();

server.use(middlewares);

// GET Requests
server.get('/400', function (req, res) {
    res.sendStatus(400);
});
server.get('/401', function (req, res) {
    res.sendStatus(401);
});
server.get('/403', function (req, res) {
    res.sendStatus(402);
});
server.get('/404', function (req, res) {
    res.sendStatus(403);
});
server.get('/405', function (req, res) {
    res.sendStatus(404);
});
server.get('/406', function (req, res) {
    res.sendStatus(405);
});
server.get('/500', function (req, res) {
    res.sendStatus(500);
});

// POST Requests
server.post('/400', function (req, res) {
    res.sendStatus(400);
});
server.post('/401', function (req, res) {
    res.sendStatus(401);
});
server.post('/403', function (req, res) {
    res.sendStatus(402);
});
server.post('/404', function (req, res) {
    res.sendStatus(403);
});
server.post('/405', function (req, res) {
    res.sendStatus(404);
});
server.post('/406', function (req, res) {
    res.sendStatus(405);
});
server.post('/500', function (req, res) {
    res.sendStatus(500);
});

// PUT Requests
server.put('/400', function (req, res) {
    res.sendStatus(400);
});
server.put('/401', function (req, res) {
    res.sendStatus(401);
});
server.put('/403', function (req, res) {
    res.sendStatus(402);
});
server.put('/404', function (req, res) {
    res.sendStatus(403);
});
server.put('/405', function (req, res) {
    res.sendStatus(404);
});
server.put('/406', function (req, res) {
    res.sendStatus(405);
});
server.put('/500', function (req, res) {
    res.sendStatus(500);
});

// PATCH Requests
server.patch('/400', function (req, res) {
    res.sendStatus(401);
});
server.patch('/401', function (req, res) {
    res.sendStatus(401);
});
server.patch('/403', function (req, res) {
    res.sendStatus(402);
});
server.patch('/404', function (req, res) {
    res.sendStatus(403);
});
server.patch('/405', function (req, res) {
    res.sendStatus(404);
});
server.patch('/406', function (req, res) {
    res.sendStatus(405);
});
server.patch('/500', function (req, res) {
    res.sendStatus(500);
});

// DELETE Requests
server.delete('/400', function (req, res) {
    res.sendStatus(401);
});
server.delete('/401', function (req, res) {
    res.sendStatus(401);
});
server.delete('/403', function (req, res) {
    res.sendStatus(402);
});
server.delete('/404', function (req, res) {
    res.sendStatus(403);
});
server.delete('/405', function (req, res) {
    res.sendStatus(404);
});
server.delete('/406', function (req, res) {
    res.sendStatus(405);
});
server.delete('/500', function (req, res) {
    res.sendStatus(500);
});

server.get('/*', function (req, res) {
    res.jsonp(req.query);
});

server.post('/*', function (req, res) {
    res.jsonp(req.query);
});

server.patch('/*', function (req, res) {
    res.jsonp(req.query);
});

server.put('/*', function (req, res) {
    res.jsonp(req.query);
});

server.delete('/*', function (req, res) {
    res.jsonp(req.query);
});

server.use(router)
server.listen(3001, function () {
    console.log('JSON Server is running')
});