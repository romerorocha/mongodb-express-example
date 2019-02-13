const DriversControler = require('../controlers/drivers_controller');

module.exports = app => {
  app.get('/api', DriversControler.greeting);
  app.post('/api/drivers', DriversControler.create);
  app.put('/api/drivers/:id', DriversControler.edit);
  app.delete('/api/drivers/:id', DriversControler.delete);
};
