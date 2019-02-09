const mongoose = require('mongoose');

before(done => {
  mongoose.connection
    .once('open', () => done())
    .on('error', err => {
      console.warn('Warning', error);
    });
});

beforeEach(done => {
  const { drivers } = mongoose.connection.collections;

  drivers
    .drop()
    .then(() => done())
    .catch(() => done());
});
