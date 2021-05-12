/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

var squadre = [

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

var arrayNomiFalli = [];

for (i=0; i<squadre.length; i++) {
    
    var squadraFalliSubiti = {};
    
    squadre[i].punti = randomNumber(1, 100);
    squadre[i].falliSubiti = randomNumber(1, 100);

    squadraFalliSubiti.nome = squadre[i].nome;
    squadraFalliSubiti.falliSubiti = squadre[i].falliSubiti;

    arrayNomiFalli.push(squadraFalliSubiti);

}
console.log(squadre);
console.log(arrayNomiFalli);


// FUNCTION
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
