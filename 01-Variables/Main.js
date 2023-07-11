//   alert("Bonjour")

var maVariable  // camel case
var ma_variable //snake case

// chose à ne pas faire 

// var 12
// var v 
// var ma-variable

// type de varaibles
var mois = "juillet"   //string
var annee = 2062 //number
var isEndOfTheWord = true //boolean

var number3 = annee +10; // 2072

console.log(number3);
console.log(annee+32);

toto = "nico"
tata = "vincent"
console.log(toto+tata); //concat str

// var nom = prompt("donne moi un nom")
//console.log(nom);

// exo
// créer 2 varialbes
// nbr1 et nbr2
// ces 2 vaiables seront des prompts que vous afficherez succesivement
// et console.log la somme des 2 nombres 

var nbr1 = parseInt(prompt("Give me a number")) ; //parseInt pour un nombre entier
var nbr2 = parseFloat(prompt("Give me an other number")); //parseFloat pour un nombre décimale
console.log(nbr1 + nbr2)

//ou 

var nbr3 = Number(prompt("Give me a number"));
var nbr4 = Number(prompt("Give me an other number"));

var nbr5 = +(prompt("Give me a number")); // "+ est équivalent au parseFloat"
var nbr6 = +(prompt("Give me an other number"));