const mongoose = require('mongoose');

module.exports = () => {
  const schema = process.env.NODE_ENV !== 'test' ? 'muber' : 'muber_test';

  mongoose.connect(`mongodb://localhost/${schema}`, { useNewUrlParser: true });
};
