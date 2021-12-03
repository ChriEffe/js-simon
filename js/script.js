/*Visualizzare in pagina 5 numeri casuali poi fateli sparire.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.*/


// array con 5 numeri casuali
let array = arrayRand(5)

// seleziono elemento dal dom
const listNumber = document.querySelector('.number');
// stampo array  in pagina
listNumber.append(array);

// lo faccio sparire dopo 5 secondi
let timerArray = setTimeout(function () {
    listNumber.innerHTML = '';
}, 5000);






// funzione per creare array da 5 numeri
function arrayRand(numb) {
    // creo array vuoto
    const array = [];
    // ciclo per creare numeri random
    for (let i = 0; i < numb; i++) {
        let numbRand = getRndInteger(1, 99);
        // ciclo per non duplicare i numeri
        while (array.includes(numbRand)) {
            numbRand = getRndInteger(1, 99);
        }
        // pusho i numeri nell'array
        array.push(numbRand);
    }
    return array
}

// genero numeri casuali
function getRndInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}