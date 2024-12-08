const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// MongoDB connection string
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/mydatabase";

// Ruta básica para la raíz
app.get("/", (req, res) => {
  res.send("Node.js app connected to MongoDB<br>Actividad Grupal Unir");
});

// Conexión a MongoDB
mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
