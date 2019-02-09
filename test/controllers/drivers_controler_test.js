const assert = require('assert');
const app = require('../../app');
const request = require('supertest');
const mongoose = require('mongoose');

const Driver = mongoose.model('driver');

describe('Drivers controller', function() {
  it('Post to /api/drivers creates a new driver', function(done) {
    Driver.countDocuments().then(count => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end(() => {
          Driver.countDocuments().then(newCount => {
            assert.equal(newCount, count + 1);
            done();
          });
        });
    });
  });
});
