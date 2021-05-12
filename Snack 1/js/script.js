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
        peso: 10,
    },

    {
        nome: "Lampo",
        peso: 20,
    },

];
console.log(bici);

var biciLeggera = {
    nome: "",
    peso: 99,
};

for (var i = 0; i < bici.length; i++) { 

    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];
    }

}
console.log(biciLeggera);

var {nome} = biciLeggera;
var {peso} = biciLeggera;

document.getElementById("bici_leggera").innerHTML = `
La bici più leggera è la ${nome} con un peso di ${peso}
`

