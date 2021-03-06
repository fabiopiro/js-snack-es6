/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// FUNCTION

/*
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
*/

// Arrow Function
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

// FUNCTION

const squadre = [
    
    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Inter",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Juventus",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Cagliari",
        punti: 0,
        falliSubiti: 0,
    },

    {
        nome: "Palermo",
        punti: 0,
        falliSubiti: 0,
    },

];

const arrayNomiFalli = [];

for (let i = 0; i < squadre.length; i++) {
    
    
    squadre[i].punti = randomNumber(1, 100);
    squadre[i].falliSubiti = randomNumber(1, 100);
    
    // NUOVA CONSEGNA --- --- --- --- ---
    // Posso usare "const" poichè le variabili di appoggio a ogni iterazione vengono ricreate da zero
    const {nome, falliSubiti} = squadre[i];
    
    arrayNomiFalli.push({
        nome, 
        falliSubiti
    });
    // NUOVA CONSEGNA --- --- --- --- ---
    
    /*
    var squadraFalliSubiti = {};

    squadraFalliSubiti.nome = squadre[i].nome;
    squadraFalliSubiti.falliSubiti = squadre[i].falliSubiti;

    arrayNomiFalli.push(squadraFalliSubiti);
    */


}
console.log(squadre);
console.log(arrayNomiFalli);

