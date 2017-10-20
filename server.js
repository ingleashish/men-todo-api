const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./db");

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(8080, ()=>{
  console.log("Server started at port 8080");
})

module.exports = { app };
