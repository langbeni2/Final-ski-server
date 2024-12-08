// const e = require("express"); // Removed as it's not needed in client-side JavaScript

function calculatePickupDate(priority) {
    const currentDate = new Date();
    if (priority === "tief") {
        currentDate.setDate(currentDate.getDate() + 13);
    } else if (priority === "express") {
        currentDate.setDate(currentDate.getDate() + 5);
    } else {
        currentDate.setDate(currentDate.getDate() + 7);
    }
    return currentDate.toLocaleDateString();
}


document.getElementById("anmeldungForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite

    // Formulardaten erfassen
    const name = document.getElementById("kundenname").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefon = document.getElementById("telefon").value.trim();
    const priority = document.getElementById("prioritaet").value;
    const service = document.getElementById("dienstleistung").value;

    // Validierung auf leere Felder
    if (!name || !email || !telefon || !priority || !service) {
        alert("Bitte füllen Sie alle Felder aus.");
        return;
    }

    // E-Mail-Validierung
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
        return;
    }

    let ServicePrice = 0
    if (service === "kleiner-service") {
        ServicePrice = 20
    } else if (service === "grosser-service") {
        ServicePrice = 50
    }
    else if (service === "Rennski-Service") {
        ServicePrice = 200
    }
    else if (service === "bindung") {
        ServicePrice = 22
    }
    else if (service === "heisswachsen") {
        ServicePrice = 60
    }
    else if (service === "fell") {
        ServicePrice = 50
    }
    else 
    {
        ServicePrice = 0
    }


    // Telefonnummer-Validierung
    const telefonPattern = /^\+?\d{1,4}[\s-]?\d{1,15}$/;
    if (!telefonPattern.test(telefon)) {
        alert("Bitte geben Sie eine gültige Telefonnummer ein.");
        return;
    }
    // Daten an die API senden
    fetch("http://localhost:5000/api/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            service: service,
            priority: priority,
            telefon: telefon,
            create_date:  new Date().toLocaleDateString(),
            pickup_date: calculatePickupDate(priority)
        }),
    })
        .then((response) => {
            if (response.ok) return response.json();
            else throw new Error("Fehler beim Erstellen der Registrierung");
        })
        .then((data) => {
            const pickupDate = calculatePickupDate(priority); // Priority wird übergeben
           // alert(`Registrierung erfolgreich! ID: ${data.id}\nAbholdatum: ${pickupDate}`);
            console.log("Erstellte Registrierung:", data);
            document.getElementById("anmeldungForm").reset(); // Formular zurücksetzen
            showConfirmationPage(name, pickupDate, service, ServicePrice); // Show confirmation page
        })
        
        .catch((error) => {
            alert(error.message);
            console.error("Fehler:", error);
        });

         // Formularvalidierung mit Bootstrap
         (function () {
            'use strict';
            const forms = document.querySelectorAll('.needs-validation');
        
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        
        })();
});
// Seite mit Abholdatum, Name und Dankesnachricht anzeigen
function showConfirmationPage(name, pickupDate, service, ServicePrice) {
    const confirmationPage = `
              <h1>Vielen Dank für Ihre Registrierung, ${name}!</h1>

            <p>Ihr Abholdatum ist am: <strong>${pickupDate}</strong></p>

             <p>Der Preis für den gewählten Service beträgt: <strong>${(ServicePrice)} CHF</strong></p>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f8f9fa;
                    color: #ffffff;
                    text-align: center;
                    padding: 50px;
                }
                h1 {
                    color: #007bff;
                }
                p {
                    font-size: 18px;
                }
                .btn-primary {
                    background-color: #007bff;
                    border-color: #007bff;
                    padding: 10px 20px;
                    font-size: 16px;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .btn-primary:hover {
                    background-color: #0056b3;
                    border-color: #004085;
                }
            </style>
              <p>Wir freuen uns, Ihnen behilflich sein zu können.</p>

               <button onclick="window.location.href='Index.html'" class="btn btn-primary">Zur Startseite</button>

  
     
`;
    document.body.innerHTML = confirmationPage;
}