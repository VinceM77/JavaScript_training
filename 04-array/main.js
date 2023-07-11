//array

// const noms = ["Jeanne","Sache"];


// // ajouter dans un array à la fin 
// noms.push("Charles");

// // ajouter dans un array au début 
// noms.unshift("Louis")

// // retirer dans un array à la fin 
// noms.pop();
// // retirer  un élément au début d'un array à la fin 
// noms.shift();

// const mesNomsPref = ["Jeanne","Sacha","Louis","Tibault","Quentin"]
// // retirer un élément à un emlpacement donné
// mesNomsPref.splice(2,1);
// // ajouter un élément à un emplacmeent donné 
// mesNomsPref.splice(2,0,"Mathieu");


// let line = "Vincent le chat";
// const myArray = line.split(" ");
// console.log(line)
// console.log(myArray);

// let newLine = myArray.join("-")
// console.log(newLine)

// const classes=["Sorcier", "Féticheur","Chasseur","Moine","Guerrier"]

// console.log(classes)

// console.log("Liste des classes : " + classes)

// afficher le contenu de l'array comme :
//  classe n°1 : Sorcier
//  classe n°2 : Féticheur
//  classe n°3 : Chasseur
//  classe n°4 : Moine
//  classe n°5 : Guerrier

// console.log(" classe n°1 : " + classes [0])
// console.log(" classe n°2 : " + classes [1])
// console.log(" classe n°3 : " + classes [2])
// console.log(" classe n°4 : " + classes [3])
// console.log(" classe n°5 : " + classes [4])

// console.log("🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅🏅")

// console.log("METHODE BAGUETTE CHINOISE :::")
           

// const nouvelleClasse = ["Sorcier", "Féticheur", "Chasseur", "Moine", "Guerrier"];

// for (let i = 0; i < nouvelleClasse.length; i++) {
//     console.log("class n°" + (i + 1) + " : " + nouvelleClasse[i]);
//   }



// via un prompt, demandez un de choisir parmis l'un des trucs (afficher les trucs dans le prompt )
//, et logger : le prix de truc est de prix

// let choix = prompt("Choissez un truc : "+trucs)
// if(typeof(choix)===string){
//     if(choix.toLowerCase().includes("table")){


// }}


//quentin

// let choix = prompt("Veuillez faire un choix entre des tables, des chaises, un buffet, une vitrine ou de la DROGUE *musique metal* ")

// if(typeof(choix) == String){
//     choix = choix.toLowerCase()
//     switch (choix) {
//         case "tables":
//             console.log(`le prix de ${trucs[0]} est de ${prix[0]} d'argent`);
//             break;
//         case "chaises":
//             console.log(`le prix de ${trucs[1]} est de ${prix[1]} d'argent`);
//             break
//         case "buffet":
//             console.log(`le prix de ${trucs[2]} est de ${prix[2]} d'argent`);
//             break
//         case "vitrine":
//             console.log(`le prix de ${trucs[3]} est de ${prix[3]} d'argent`);
//             break
//         case "drogue":
//             console.log(`le prix de ${trucs[4]} est de ${prix[4]} d'argent`)
//             break
//         default:
//             console.log(`Il fallait choisir parmis la liste... Désolé, le magasin va fermer.`)
//             break;
//     }
    
// }
// else{
//     console.log("Tu as bien lu la liste non ? Franchement...");
// }


//athmann

// let choix = prompt("Choisissez parmi les trucs suivants : " + trucs);
// console.log("Le prix de " + choix + " est de " + prix[trucs.indexOf(choix)]);


//mattéo

// let choixTruc = prompt("Qu'est ce que tu veux Michel ? " + trucs.join(", ") + " ?")

// let i = trucs.indexOf(choixTruc)
// if (i !== -1){
//     console.log("le prix de " + choixTruc + " est de " + prix[i])
// }else{
//     alert("Nope, y'a pas ça dans la boutique Michel")
// }


//Maxime

// const trucs =["Table"," Chaise"," Buffet"," Vitrine"," Drogue"]
// const prix =[250, 70, 460, 700, 100000000]

// let choix = prompt("Veuillez faire un choix entre" +  trucs.join(", "))

// for(let i = 0; i < trucs.length; i++){
//     if(choix === trucs[i]){
//         console.log("Le prix de " + choix + " est de " + prix[i]);
//         break;
//     }else{
//         console.log("ceci n'est pas un élément du tableau ");
//         break;
//     }
// }


const amis = [];
amis.push("Vince");
amis[1]="Nicolas";
amis[2]="Tibo";
amis[3]="Soufiane";

const ennemi = [];
ennemi[1]= "Seb";
ennemi[0]="Matteo";
ennemi[2]="Quentin";

const gens = [amis,ennemi];

console.log(gens[1][0])


// en passant par l'array gens, afficher toutes les personnes 

// La boucle externe for itère sur les éléments de gens 
// boucle for interne itère sur les éléments de chaque tableau contenu dans gens

for (let i = 0; i < gens.length; i++) {     // boucle externe 1er tableau ici "gens"
    for (let j = 0; j < gens[i].length; j++) {    // boucle interne 2nd tableau ici "amis" & "ennemis"
      console.log(gens[i][j]);
    }
  }

