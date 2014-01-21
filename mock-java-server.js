var loopback = require('loopback');
var mockServer = module.exports = loopback();
mockServer.use(loopback.logger('dev'));

mockServer.get('/route/index', function(req, res) {
  res.send({
    host: req.headers.host,
    url: req.url,
    query: req.query
  });
});

if(require.main === module) {
  mockServer.listen(4000);
}
