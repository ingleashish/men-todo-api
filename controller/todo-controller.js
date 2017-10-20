const {Todo} =  require("../models/todo.model");

module.exports = {
  createTodo(req, res) {
    let todo = new Todo({
      text: req.body.text
    });

    todo.save().then((savedTodo) => {
      console.log(savedTodo);
      res.status(200).send(savedTodo);
    }, (error) => {
      res.status(400).send(error);
      console.log("Error occured", error);
    });
  },
}
