const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");

const app = express();

const announcements = require("./routes/db/Announcements");
const documentations = require("./routes/db/Documentations");
const news = require("./routes/db/Newss");
const resources = require("./routes/db/Resources");

const educationalTours = require("./routes/db/EducationalTours");
const cleaningMovements = require("./routes/db/CleaningMovements");
const ecoProjects = require("./routes/db/EcoProjects");
const plantationDrives = require("./routes/db/PlantationDrives");

const internships = require("./routes/db/Internships");
const trainings = require("./routes/db/Trainings");
const certificateCourses = require("./routes/db/CertificateCourses");

const photos = require("./routes/db/Photos");

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
app.use("/db/Documentations", documentations);
app.use("/db/Newss", news);
app.use("/db/Resources", resources);

app.use("/db/EducationalTours", educationalTours);
app.use("/db/CleaningMovements", cleaningMovements);
app.use("/db/EcoProjects", ecoProjects);
app.use("/db/PlantationDrives", plantationDrives);

app.use("/db/Internships", internships);
app.use("/db/Trainings", trainings);
app.use("/db/CertificateCourses", certificateCourses);

app.use("/db/Photos", photos);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server active on port : ", PORT));
