# Präsentation der Webseite

## 1. Einführung

**Ziel des Projekts:**

Erstellung einer responsiven Webseite für Jetstream-Service. Ermöglicht die Online-Registrierung von Ski-Service-Aufträgen.

**Hauptfeatures:**

- Benutzerfreundliches Formular mit Validierung.
- Integration eines Backends zur Verarbeitung von Daten.
- Responsives Design, das auf verschiedenen Geräten funktioniert.

## 2. Code-Erklärung

### Frontend – Anmeldung (`anmeldung.html`)

**Formular für die Registrierung:**

```html
<form id="anmeldungForm" class="needs-validation" novalidate>
    <div class="mb-3">
        <label for="kundenname" class="form-label">Kundenname</label>
        <input type="text" class="form-control" id="kundenname" name="kundenname" required>
        <div class="invalid-feedback">Bitte geben Sie Ihren Namen ein.</div>
    </div>
    <button type="submit" class="btn btn-primary">Anmelden</button>
</form>
```
![alt text](image.png)
**Was passiert hier?**

- Das Formular verwendet `required`, um leere Eingaben zu verhindern.
- Bootstrap-Klassen wie `form-control` und `invalid-feedback` sorgen für ein modernes Design und visuelle Validierung.

### Backend – API-Endpunkte (`server.js` & `registration.controller.js`)

**API-Endpunkt für neue Registrierung:**

```javascript
router.post("/registration", addRegistration);
```

**Controller für die Registrierung:**

```javascript
exports.addRegistration = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name ist erforderlich." });
    }
    const newRegistration = { id: Date.now(), name };
    res.status(201).json(newRegistration);
};
```

**Erklärung:**

- Die Route `/api/registration` akzeptiert `POST`-Anfragen.
- Der Controller prüft die Eingaben und gibt eine Fehlermeldung zurück, wenn Daten fehlen.

## 3. Live-Demo 
<br>
<br>
<br>
<br>
<br>
<br>

[Webseite](http://localhost:5000)

<br>
<br>
<br>
<br>
<br>
<br>
<br>

#
## 4. Fazit

**Erfolge:**

- Benutzerfreundliche Webseite mit validierter Datenübertragung.
- Erfolgreiche Integration von Frontend und Backend.

**Herausforderungen:**

- Validierung und Debugging von API-Integrationen.
- Gestaltung eines klaren, responsiven Designs.

**Ausblick:**

- Fehler beheben 
- Quality of life verbessern
- angebot besser beschreiben
- Darkmode verbessern
- Sachen ergänzen

## Q&A 

Noch Fragen?
