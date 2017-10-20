const mongoose = require("mongoose");

//use node native promise
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI , { useMongoClient: true});

module.exports = mongoose;
