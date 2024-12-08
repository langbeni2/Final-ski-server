
# IPERKA-Dokumentation

## **1. I - Investigieren**
### Ausgangslage:
- Die Firma Jetstream-Service benötigt eine modernisierte Webseite mit responsivem Design und einer Online-Serviceanmeldung.
- Ein Backend existiert bereits und wurde auf Basis von Node.js und Express aufgebaut. Es bietet eine REST-API, die über Swagger dokumentiert ist.
- Das Projekt besteht aus zwei Hauptkomponenten:
  1. Frontend (Client) für die Benutzeroberfläche.
  2. Backend (Server) für die Verarbeitung und Speicherung der Daten.

### Anforderungen (A1–A11):
1. Landing Page mit klarer Botschaft, visuellem Aufhänger und Angebotsübersicht.
2. Responsives Design (Bootstrap empfohlen).
3. Kontaktseite mit vollständigen Informationen.
4. Formular für die Serviceanmeldung mit Validierung der Eingabedaten.
5. Datenübermittlung an das Backend (REST-API).
6. Auswahl der Dienstleistungen im Formular.
7. Benutzerfreundliche Anzeige der gewählten Dienstleistung.
8. Bestätigung nach erfolgreicher Anmeldung.
9. Testprotokoll zur Eingabevalidierung.
10. API-Tests (Postman oder REST-Client).
11. Dokumentation des gesamten Projekts nach IPERKA.

### Randbedingungen:
- Vollständige Validierung der Eingaben (z. B. E-Mail, Telefonnummer).
- REST-API bereits vorhanden (Swagger-Spezifikation im Projekt enthalten).
- Projekt muss in einer Präsentation (15-20 Minuten) vorgestellt werden.

---

## **2. P - Planen**
### Projektressourcen:
- Frontend: HTML5, CSS3, JavaScript, Bootstrap.
- Backend: Node.js, Express, REST-API (bestehend).
- Tools: VS Code, Postman, Swagger.
- Validierung: HTML5-Standard und JavaScript (Regex für E-Mail/Telefon).

### Zeitplanung:
1. Woche 1: Einrichtung des Projekts, Design der Landing Page.
2. Woche 2: Umsetzung der Kontaktseite und Formularelemente.
3. Woche 3: Integration der API und Validierung der Eingaben.
4. Woche 4: Testen der API, Fehlerbehebung, Feinschliff.
5. Woche 5: Dokumentation und Vorbereitung der Präsentation.
6. Woche 6: Abschlusspräsentation mit Live-Demo.

### Qualitätssicherung:
- Testprotokoll für die Eingabevalidierung.
- Tests der API mit Postman und REST-Client.
- Responsivitätsprüfungen auf verschiedenen Geräten.

### Risikomanagement:
- **API nicht erreichbar:** Mock-Daten verwenden.
- **Fehlerhafte Validierung:** Umfangreiche Tests und Benutzerfeedback einholen.

---

## **3. E - Entscheiden**
### Technologische Entscheidungen:
- Frontend: Nutzung von Bootstrap für responsives Design.
- Backend: Bestehendes API bleibt unverändert; Integration erfolgt über Fetch-API.
- Validierung: HTML5-Standards plus zusätzliche JavaScript-Checks (Regex).
- Struktur: Klare Navigation zwischen Landing Page, Kontakt und Formularseite.

### Designentscheidungen:
- Farbpalette: Helle, winterliche Farben (z. B. Blau und Weiss).
- Landing Page: Begrüssung mit Hero-Image oder Video, Angebotsübersicht, CTA-Button („Jetzt Service anmelden“).
- Formularseite: Klare Eingabefelder, Dropdowns für Dienstleistungen und Priorität.

---

## **4. R - Realisieren**
### 4.1 Umsetzung Landing Page (A1, A2):
- Responsives Layout mit Bootstrap.
- Visueller Aufhänger (Bild oder Video von Skifahrern).
- Knappe Übersicht der angebotenen Dienstleistungen mit Links zu weiteren Seiten.

### 4.2 Umsetzung Kontaktseite (A3):
- Darstellung der Kontaktinformationen: Adresse, Telefonnummer, E-Mail.
- Evtl. Integration von Google Maps für eine Anfahrtskarte.

### 4.3 Umsetzung Formularseite (A4, A6, A7, A8):
- Eingabefelder für Kundenname, E-Mail und Telefon.
- Dropdowns für Dienstleistung und Priorität.
- Dynamische Berechnung des Abholdatums basierend auf Priorität:
  - Standard: +7 Tage.
  - Express: +5 Tage.
  - Tief: +12 Tage.
- Validierung der Eingaben:
  - E-Mail und Telefonnummer per Regex prüfen.
- Nach erfolgreicher Anmeldung: Anzeige einer Bestätigungsmeldung.

### 4.4 Backend-Anbindung (A5):
- Datenübermittlung per Fetch-API als POST-Request.
- Zu sendende Daten:
  - Kundenname, E-Mail, Telefon.
  - Dienstleistung, Priorität, Erfassungsdatum (aktuelles Datum), berechnetes Abholdatum.
- Verbindung testen und sicherstellen, dass die API korrekt antwortet.

### 4.5 Testing & Debugging (A9, A10):
- Testszenarien:
  - Ungültige Eingaben (E-Mail leer, falsches Format, Telefonnummer leer).
  - API-Anfragen mit fehlenden oder falschen Daten.
- Test-Tools:
  - Postman/REST Client zur Simulation von API-Aufrufen.
  - Browser-Konsole für Frontend-Fehler.

### 4.6 Dokumentation (A11):
- Screenshots der Webseiten und Formularvalidierungen.
- Testprotokoll mit verschiedenen Eingabeszenarien.
- Postman-Tests zur Überprüfung der API-Funktionalität.

---

## **5. K - Kontrollieren**
### Prüfung der Anforderungen:
- Landing Page: Sind alle visuellen und inhaltlichen Elemente vorhanden?
- Responsives Design: Funktioniert die Darstellung auf Desktop, Tablet und Smartphone?
- Formular: Werden Eingaben korrekt validiert und an das Backend gesendet?
- API: Werden alle Daten vollständig übertragen und korrekt gespeichert?
- Testprotokoll: Wurden alle Testszenarien erfolgreich abgeschlossen?

### Fehlerbehebung:
- Sicherstellen, dass alle Anforderungen (A1–A11) erfüllt sind.
- API-Fehler beheben, falls Anfragen nicht korrekt verarbeitet werden.

---

## **6. A - Auswerten**
### Ergebnisse:
- Funktionale Webseite mit Landing Page, Kontaktseite und Serviceanmeldeformular.
- Responsives Design, validierte Eingaben, API-Anbindung erfolgreich getestet.
- Berechnung des Abholdatums auf Basis der Priorität funktioniert korrekt.

### Lessons Learned:
- Frühzeitiges Testen der API erspart spätere Probleme.
- Bootstrap erleichtert die Umsetzung eines responsiven Designs erheblich.
- Validierungen sind essenziell, um fehlerhafte Eingaben zu verhindern.


---

### **Anhänge:**

###OrdnerStruktur
```Arduino
📁 Modul294-SkiService-Server/
  📁 client/
    📄 registration-api.rest
  📁 server/
    📄 .env
    📄 server.js
    📄 swagger.json
    📁 controllers/
    📁 data/
    📁 models/
    📁 routes/
      📄 registration.route.js
    📁 public/
      📄 Index.html
      📄 anmeldung.html
      📄 kontakt.html
      📄 Besteatigung.html
      📁 images/
        📄 bindung.png
        📄 fell.png
        📄 grosser-service.jpg
        📄 heisswachsen.png
        📄 image.png
        📄 kleiner-service.png
        📄 logo.png
        📄 rennski-service.png
      📁 videos/
        📄 Bergpano.mp4
        📄 intro.mp4
        📄 Kontak.mp4
      📄 styles.css
      📄 anstyles.css
      📄 darkmode.js
      📄 script.js
  📄 README.md

```

