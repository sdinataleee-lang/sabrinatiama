
// SELEZIONE DEGLI ELEMENTI
const schermataIniziale = document.getElementById("iniziale");
const schermataContatore = document.getElementById("contatore");

const pulsanteInizia = document.getElementById("inizia");
const pulsanteTap = document.getElementById("tap");

// VALORE INIZIALE
let amore = 10;

// LIMITE MASSIMO
const amoreMassimo = 10000000000;

// 1. PASSAGGIO ALLA SECONDA SCHERMATA
pulsanteInizia.addEventListener("click", function() {
    schermataIniziale.style.display = "none";
    schermataContatore.style.display = "block";
});

// 2. AUMENTO DEL MOLTIPLICATORE A OGNI TAP
pulsanteTap.addEventListener("click", function() {

    if (amore < amoreMassimo) {
        amore *= 10;
    }

    // AGGIORNA IL TESTO
    if (amore === amoreMassimo) {
        pulsanteTap.textContent = "Sabrina ti ama x" + amore + "❤️";
    } else {
        pulsanteTap.textContent = "Sabrina ti ama x" + amore + " volte";
    }

});
