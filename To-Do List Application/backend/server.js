


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const taskRoutes = require("./routes/taskRoutes");

app.use(cors());
app.use(express.json());
app.use("/api", taskRoutes);

// connect MongoDB
mongoose.connect("Mongo_URI")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(3700, () => console.log("Server running on port 3700"));