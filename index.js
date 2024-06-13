const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
dotenv.config();

const app = express();
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
// const progressRoutes = require("./routes/progressRoutes");

app.use("/api", authRoutes);
app.use("/api", courseRoutes);
// app.use("/api", progressRoutes);

const PORT = process.env.PORT || 7000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
