const assert = require('assert');
const app = require('../../app');
const request = require('supertest');
const mongoose = require('mongoose');

const Driver = mongoose.model('driver');

describe('Drivers controller', function() {
  it('POST to /api/drivers creates a new driver', function(done) {
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

  it('PUT to /api/drivers/:id updates a driver', function(done) {
    const driver = new Driver({ email: 'to_update@test.com', driving: false });

    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`)
        .send({ email: 'updated@email.com', driving: true })
        .end(() =>
          Driver.findById(driver._id).then(driver => {
            assert.equal(driver.email, 'updated@email.com');
            assert.equal(driver.driving, true);
            done();
          })
        );
    });
  });

  it('DELETE to /api/drivers/:id deletes a driver', function(done) {
    const driver = new Driver({ email: 'to_delete@test.com' });

    driver.save().then(() => {
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        .end(() => {
          Driver.findOne({ email: 'to_delete@test.com' }).then(driver => {
            assert.equal(driver, null);
            done();
          });
        });
    });
  });
});
