const mongoose = require('mongoose');

before(done => {
  mongoose.connection
    .once('open', () => done())
    .on('error', err => {
      console.warn('Warning', error);
    });
});

beforeEach(async () => {
  const { drivers } = mongoose.connection.collections;

  try {
    await drivers.drop();
  } catch (error) {}
});
