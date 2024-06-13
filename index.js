const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
dotenv.config();

const app = express();
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const progressRoutes = require("./routes/progressRoutes");

app.use("/api", authRoutes);
app.use("/api", courseRoutes);
app.use("/api", progressRoutes);

// app/swagger.js
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Course Management System API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:7000/api",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.PORT || 7000;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
