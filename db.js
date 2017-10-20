const mongoose = require("mongoose");

//use node native promise
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/todoapp", { useMongoClient: true});

module.exports = mongoose;
