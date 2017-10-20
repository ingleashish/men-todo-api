const ENV = process.env.NODE_ENV || 'development';

console.log("Env: ", ENV);

if(ENV === 'development'){
  process.env.PORT = 8080
  process.env.MONGODB_URI = "mongodb://localhost:27017/todoapp"
} else if(ENV === 'test'){
  process.env.PORT = 8080
  process.env.MONGODB_URI = "mongodb://localhost:27017/test_todoapp"
}
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./db");

const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(port, ()=>{
  console.log(`Server started at port ${port}`);
})

module.exports = { app };
