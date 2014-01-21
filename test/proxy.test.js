var request = require('superagent');
var assert = require('assert');

describe('Proxy Tests', function () {
  beforeEach(function(done) {
    this.app = require('../app');
    this.url = 'http://localhost:3000';
    this.app.listen(3000, done);
  });

  beforeEach(function (done) {
    this.mockServer = require('../mock-java-server');
    this.mockServer.listen(4000, done);
  });

  it('should proxy based on the map', function (done) {
    request
      .get(this.url + '/api/foo/7')
      .end(function(err, res) {
        assert.equal(res.body.url, '/route/index?7');
        done();
      });
  });
});
