const mongoose = require("mongoose");
//Mongodb conncetion URI
const dbURI = "mongodb://cold";
//Connecting to mongodb database
mongoose.connect
(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//Default connection
const db = mongoose.connection;
//Binding conncetion events
db.on("connceted", ()=>{
  console.log(`Connected to MongoDB at ${dbURI}`);
});
db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});
db.on("disconnected", () => {
  console.log('Disconnected from MongoDB');
});
//Export connection
module.exports = db;