// Setup:
// npm init --y
// npm install --save express dotenv cors
// Start:  >npm start
//         npm run dev

const express = require("express");
const cors = require("cors");
const path = require("path");
const RegistrationRouter = require("./routes/registration.route");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

// App-Initialisierung
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, "public")));

// API-Routen
app.use("/api", RegistrationRouter);

// Swagger-Dokumentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Fallback für nicht vorhandene Dateien
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft unter: http://localhost:${port}`);
});
