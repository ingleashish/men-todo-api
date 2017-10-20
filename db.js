const mongoose = require("mongoose");

//use node native promise
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/todoapp");

module.exports = mongoose;
