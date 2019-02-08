const DriversControler = require('../controlers/drivers_controller');

module.exports = app => {
  app.get('/api', DriversControler.greeting);
};
