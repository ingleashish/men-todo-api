const {Todo} =  require("../models/todo.model");
const _ = require("lodash");
const {ObjectID} = require("mongodb");

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

  listTodo(req, res) {
    Todo.find().then((allTodo)=>{
      res.status(200).send(allTodo);
    }, (error)=>{
      res.status(400).send(error);
    })
  },

  getTodoById( req, res) {
    let id = req.params.id;

    if(!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findById(id).then((todo)=>{
      if(!todo) {
        return res.status(404).send();
      }

      res.status(200).send(todo);
    }, (error)=>{
      res.status(400).send(error);
    });
  },

  deleteTodo(req, res) {

    let id = req.params.id;

    if(!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
      if(!todo) {
        return res.status(404).send();
      }

      res.status(200).send(todo);
    }, (error)=>{
      res.status(400).send(error);
    });
  },

  updateTodo(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }


    Todo.findByIdAndUpdate(id, {$set:body}, {new: true}).then((todo)=>{
      if(!todo) {
        return res.status(404).send();
      }
      res.status(200).send(todo);
    }, (error)=>{
      res.status(400).send(error);
    });



  }
}
