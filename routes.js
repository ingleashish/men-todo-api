todoCtrl = require("./controller/todo-controller");

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.send("<h1>Welcome to Todos API Node Mongo Express App!</h1>")
  });

  app.post('/api/todo', todoCtrl.createTodo);
}