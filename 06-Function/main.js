// function sayHello(){
//     console.log("salut");
// }

// sayHello();

// //methode iifee(Immediatly invoked function expression)

// (function sayHello2(){
//     console.log("salut");
// })();

// function saySomething(mdr){
//     console.log(mdr);
//     mdr = mdr.toUpperCase();
//     console.log(mdr)
// }

// saySomething("Bonjour Saad!! ")
// saySomething("Yo dude! ")

// const listeInvite=["Anthmann", "Saad","Sofiane","Quentin"];

// const present =[];

// function checkPeople(dude){
//     if(dude==="Quentin"){
//         console.log("La sortie est par là, vile raclure "+ dude);
//     }else{
//         console.log("Bienvenue à notre petite sauterie "+ dude);
//         present.push(dude);
//     }
// }

// for(let guy of listeInvite){
//     checkPeople(guy)
// }
// console.log(present);


// function calcule(mdr,mdr2){
//     return mdr + mdr2;
// }
// console.log(calcule(10,4));


//exo 
// via 3 prompt
// retourner la moyenne de ces 3 derniers dans la console

// function moyenne(a,b,c){
//     return(a+b+c)/3;
// }
// var nbr1 = parseInt(prompt("Give me a number"));
// var nbr2 = parseInt(prompt("Give me an other number"));
// var nbr3 = parseInt(prompt("Give me a last number"));

// console.log("mean number is : " + moyenne(nbr1,nbr2,nbr3));


// exo 2 
// via 3 prompts
//demandez 2 nombres et un opéreteur, et retournez le résultat de l'opération

// var nbr1 = parseInt(prompt("Give me a number"));
// var nbr2 = parseInt(prompt("Give me an other number"));
// var op = prompt("Give me an operator");

// function result(nb1,nb2,operator){
//     if(operator=="+"){
//         return nb1+nb2
//     }else if(operator =="-"){
//         return nb1-nb2
//     }else if(operator =="*"){
//         return nb1*nb2
//     }else if(operator =="/"){
//         if (nb2 == 0){
//             return "impossible"
//         }else{
//             return nb1/nb2
//         }
//     }
    
// }

// console.log("The result is "+ result(nbr1,nbr2,op))


const badPeoples = [
    {
        "name" : "Quentin",
        "compteur" : 0
    },
    {
        "name" : "Houssine",
        "compteur" : 0
    },
    {
        "name" : "Nicolas",
        "compteur" : 0
    },
    {
        "name" : "Vincent",
        "compteur" : 0
    },
    {
        "name" : "Matteo",
        "compteur" : 0
    },
    {
        "name" : "Seb",
        "compteur" : 0
    },
    {
        "name" : "Sofiane",
        "compteur" : 0
    },
    {
        "name" : "Saad",
        "compteur" : 0
    },
    {
        "name" : "Athmann",
        "compteur" : 0
    },
]

let isContinue = true;

while(isContinue){
    let question = prompt("Qui a gagné un point?? ");
    console.clear();
    for(let guy of badPeoples){

        if(question ===guy.name){
            guy.compteur ++;

    }else if(question===""){
        isContinue = false;
    }
    console.log(guy.name + " "+ guy.compteur);
    }
}
    




