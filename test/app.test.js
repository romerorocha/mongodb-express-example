const assert = require('assert');
const request = require('supertest');

const app = require('../app');

describe('The express app', function() {
  it('handles a GET request to /api', function(done) {
    request(app)
      .get('/api')
      .end(function(err, response) {
        assert.equal(response.body.hi, 'there');
        done();
      });
  });
});
