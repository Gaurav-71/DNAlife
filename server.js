const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");

const app = express();

//const items = require("./routes/api/items");

// body parser middleware
app.use(express.json());

// cors middleware
app.use(cors({ origin: true, credentials: true }));

// DB config
//const db = require("./config/keys").mongoUri;

// connect to mongodb
// mongo
//   .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(err));

// use routes
//app.use("/api/items", items); // links all routes to items.js file in routes/api

app.get("/", (req, res) => {
  res.json("Hi from server");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server active on port : ", PORT));
