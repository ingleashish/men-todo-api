const todoCtrl = require("./controller/todo-controller");
const userCtrl = require("./controller/user-controller");
const auth = require("./middleware/auth.middleware");

module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.send("<h1>Welcome to Todos API Node Mongo Express App!</h1>")
  });

  app.post('/api/todos', todoCtrl.createTodo);
  app.get('/api/todos', todoCtrl.listTodo);
  app.get('/api/todos/:id', todoCtrl.getTodoById);
  app.delete('/api/todos/:id', todoCtrl.deleteTodo);
  app.patch('/api/todos/:id', todoCtrl.updateTodo);
  app.post('/api/users', userCtrl.createUser);
  app.get('/api/users/me',auth, userCtrl.getAuthUser);
}
