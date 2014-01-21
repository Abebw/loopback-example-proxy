var qs = require('qs');
var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({});
var app = require('../app');
var loopback = require('loopback');

/**
 * Map the requested host to a host the router should proxy to.
 */

var hostMap = {
  'localhost:3000': 'localhost:4000'
};

/**
 * Map each `express` style route to a route the proxy should forward the
 * request to.
 */

var routeMap = {
  '/api/foo/:id': '/route/index?:id'
};

// create a basic loopback / express application
var router = loopback();

// build out a set of routes for each of the entries in the map above
Object.keys(routeMap).forEach(function(route) {

  // add a route that accepts any verb
  router.all(route, function(req, res, next) {
    var dest = {
      route: routeToURI(routeMap[route], req.params),
      host: hostForReq(req)
    };

    // rewrite the request URL to the destination
    if(dest.route) req.url = dest.route;

    // reparse the query string into a query object
    var query = dest.route.split('?')[1];
    if(query) {
      req.query = qs.parse(query);
    }

    // proxy the modified request to the host based on the mapping above
    proxy.web(req, res, {target: 'http://' + dest.host});
  });
});

// mount the proxy/router on the app
app.use(router);

/**
 * Build the URI from the given params. Replacing `:paramName`
 * with the actual value.
 * @param  {String} route  A route string. eg. `/:modelName?id=:id`
 * @param  {Object} params An object containing a map of route params
 * @return {String} The actual URI
 */

function routeToURI(route, params) {
  Object.keys(params).forEach(function(param) {
    route = route.replace(':' + param, params[param]);
  });

  return route;
}

function hostForReq(req) {
  var host = req.headers.host;
  host = host.replace('127.0.0.1', 'localhost');
  host = host.replace('0.0.0.0', 'localhost');
  return hostMap[host];
}
