const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");

const app = express();

const announcements = require("./routes/db/Announcements");
const educationalTours = require("./routes/db/EducationalTours");
const cleaningMovements = require("./routes/db/CleaningMovements");
const ecoProjects = require("./routes/db/EcoProjects");
const plantationDrives = require("./routes/db/PlantationDrives");

const config = require("./privateKeys");

// body parser middleware
app.use(express.json());

// cors middleware
app.use(cors({ origin: true, credentials: true }));

// DB config
const db = config.mongoUrl;

// connect to mongodb
mongo
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// use routes
app.use("/db/Announcements", announcements);
app.use("/db/EducationalTours", educationalTours);
app.use("/db/CleaningMovements", cleaningMovements);
app.use("/db/EcoProjects", ecoProjects);
app.use("/db/PlantationDrives", plantationDrives);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server active on port : ", PORT));
