// if(condition){
// // si la condition est remplie
//     var toto
//     let tata
// }

// console.log(toto);
// console.log(tata);


// let et const 
// les varialbles temporaires ne sont accéssibles que dans le scoop où elles sot déclarées et leurs enfants 

// le const est une variable temporaire qu'on peut pas réassigner

const truc = "tata";

// impossible de modifier truc = "tata"

let name = "Said"

// = //assignation
// == // comparaison ex : 3 == "3" => true
// === //comparaison valeur + type 3==="3" => false
// != // différent

// if(name === "Said"){
//     console.log("Hi Said");

// }else{
//     console.log("Who are you?");
// }



// // let age = +prompt("How old are you.");
// // if(isNaN(age)){
// //     console.log("I've asked a number !!")
// // }else{

// //     if(age > 100){
// //         console.log("Liar");
// //     }else if(age>= 18){
// //         console.log('You are of age');
// //     }else{
// //         console.log("You're a piece of shit");
// // }
// // }


// //Exo 
// // prompt "combien de pommes avez vous recoltées"
// // si plus de 35 
// // demander via un prompt de quelle couleur sont les pommes 
// // si les pommes sont rouge , console.log "bien joué j'aime le rouge"
// // si elles sont verte  , console.log "c'est pas mal mais je voulais des rouges"
// // si c'est une autre couleur, console .log "couleur n'est pas une couleur de pomme"
// // si moins de 35 pommes console.log "retourne travailler fumier"

// // bonus 
// // faire ne sorte que votre algo comprenne si j'écris ROUGE, Rouge, rouges, , des pommes rouges


// let apple = +prompt("How many apple did you harvest?");

// if(isNaN(apple)){
//     console.log("I've asked a number, dumbass !!");
// }else{
//     if(apple>35){
//         let color=prompt("What color are they?");
//         if(color == "red"){
//             console.log("Well done, I like red ones");
//         }else if(color=="green"){
//             console.log("Good job, but I want red ones");
//         }else{
//             console.log(color + " is not an apple color");
//         }
//     }else{
//         console.log("Go back to work, bastard!");
//     }
// }


// // merci matteo

// let nbrePomme = +prompt("Combien de pommes as-tu?")

// if(isNaN(nbrePomme)){
//     //     console.log("j'ai demandé un nombre")
//     console.log("j'ai demandé un nombre")
// }else{  

//     if(nbrePomme > 35){
//         let couleurPomme = prompt("Ah ouais ? Et quelle couleur ?")
//         if(typeof(couleurPomme)===string){
    
//             if(couleurPomme.toLowerCase().includes("rouge")){
//                 console.log("Bo goss, j'aime le red")
//             }
//             else if (couleurPomme.toLowerCase().includes("verte")){
//                 console.log("Beyyyk j'aime pas le vert. Je veux des rouges")
//             }
//             else{
//                 console.log("c'est pas une couleur de pomme ducon")
//             }
//         }else{
//             console.log("Ecrit en français ducon")}
        
//     }else{
//         console.log("Va bosser ptit con")
//     }

// }

// Exo meuble à tiroir
// choisir un tiroir via un prompt
// si 1 : ce tiroir contient des vêtements
// si 2 : ce tiroir est fermé à clé
// si 3 : ce tiroir est vide
// si 4 : ce tiroir contient des chaussetters

//résolvez cette exo avec le switch case

let tirroir = prompt("Choisissez un tirroir numéroté de 1 à 4")
if(isNaN(tirroir)){
    console.log("j'ai demandé un nombre entre 1 et 4 ")
}else{
    switch(tirroir) {
        case 1:
        // code block
            console.log("ce tiroir contient des vêtements")
        break;
        case 2:
        // code block
            console.log("cece tiroir est fermé à clé")
        break;
        case 3:
        // code block
            console.log("ce tiroir est vide")
        break;
        default:
        // code block
            console.log("ce tiroir contient des chaussettes")
  }

}


var choix = +prompt("💀 >> Veuillez choisir un tiroir de 1 a 4 🤗");
while(isNaN(choix)){
    console.log("💀 >> HE hoo!!!! j'ai demandé un nombre 🤬");
    choix = +prompt("💀 >> Veuillez choisir un tiroir de 1 a 4 🤗");
}
if(choix>0){
    switch(choix){
        case 1:
          console.log("ce tiroir contient des vêtements 👀");
          break;
        case 2:
          console.log("ce tiroir est fermé à clé 👀");
          break;
        case 3:
          console.log("ce tiroir est vide 👀");
          break;
        case 4:
          console.log("ce tiroir contient des chaussetters 👀")
          break;
        default:
          console.log("💀 >> EHHH c'est quoi ca !!! CONNARD 🤬 je vais te trucider 🪓👺🔪");
          break;
      }
}else{console.log("💀 >> EHHH c'est quoi ca !!! CONNARD 🤬 je vais te trucider 🪓👺🔪");}