/*
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.
*/
var bici = [

    {
        nome: "Fulmine",
        peso: 15,
    },

    {
        nome: "Saetta",
        peso: 18,
    },

    {
        nome: "Lampo",
        peso: 20,
    },

];
console.log(bici);

var biciPeso = 99;
var biciLeggera = "";

for (var i=0; i<bici.length; i++) { 

    if (bici[i].peso < biciPeso) {
        biciPeso = bici[i].peso;
        biciLeggera = bici[i].nome;
    }

}

console.log("La bici più leggera è la:", biciLeggera, "con un peso di", biciPeso);