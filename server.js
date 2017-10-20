const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./db");

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json());

routes(app);

app.listen(port, ()=>{
  console.log(`Server started at port ${port}`);
})

module.exports = { app };
