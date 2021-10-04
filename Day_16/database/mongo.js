const mongoose = require("mongoose");

const mongodb = "mongodb://127.0.0.1:33017/test";
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("connect", console.log.bind(console, "connection success"));
db.on("error", console.error.bind(console, "connection error:"));
