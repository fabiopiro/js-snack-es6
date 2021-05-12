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

var [bici1,bici2,bici3] = bici;

console.log(bici1.peso);
console.log(bici2.peso);
console.log(bici3.peso);



var biciPeso = 99;
var biciLeggera = "";

for (var i = 0; i < bici.length; i++) { 

    if (bici[i].peso < biciPeso) {
        biciPeso = bici[i].peso;
        biciLeggera = bici[i].nome;
    }

}

document.getElementById("bici_leggera").innerHTML = `
La bici più leggera è la ${biciLeggera} con un peso di ${biciPeso}
`

