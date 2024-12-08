const express = require("express");

const {
  getRegistrations,
  addRegistration,
  deleteRegistration,
} = require("../controllers/registration.controller");

const router = express.Router();

/* Creating a route for the get registrations request. */
router.get("/registrations", getRegistrations);

/* Creating a route for the add registration request. */
router.post("/registration", addRegistration);

/* Creating a route for the add registration request. */
router.delete("/registration/:id", deleteRegistration);

module.exports = router;

let registrations = []; // Dummy-Datenbank

// Registrierung hinzufügen
exports.addRegistration = (req, res) => {
    const { name, email, phone, priority, service } = req.body;

    // Eingabedaten validieren
    if (!name || !email || !phone || !priority || !service) {
        return res.status(400).json({ error: "Alle Felder sind erforderlich." });
    }

    // Optionale E-Mail-Validierung
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return res.status(400).json({ error: "Ungültige E-Mail-Adresse." });
    }

    const today = new Date();
    let daysToAdd = 7; // Standard
    if (priority === "tief") daysToAdd += 5;
    if (priority === "express") daysToAdd -= 2;

    const pickupDate = new Date(today.getTime() + daysToAdd * 24 * 60 * 60 * 1000);

    const newRegistration = {
        id: registrations.length + 1,
        name,
        email,
        phone,
        priority,
        service,
        creationDate: today.toISOString().split("T")[0],
        pickupDate: pickupDate.toISOString().split("T")[0],
    };

    // Registrierung speichern
    registrations.push(newRegistration);

    res.status(201).json(newRegistration);
};


