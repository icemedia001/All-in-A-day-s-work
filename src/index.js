const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
require("dotenv").config();
app.listen(PORT, ()=>{
  console.log(`Server is u=running on ${PORT}`);
})