// // while

// while(condition){
//     // code qui s'executer en boucle tant que la condition n'est pas remplie

// }




// let count = 0
// while(count<100){
//     console.log(count);
//     count++ // == count+=1 ou count = count+1
//}

// let prenom = prompt("entrez un prénom");
//     while(prenom !=" "){
//         console.log("Bonjour "+ prenom);
//         prenom = prompt("entrez un prénom");
//     }


// for

//  for(compteur, compteur = 0; compteur<100) 

 
//     //code s'execute en boucle jusqu'à la fin du compteur

// for(let i =0; i<100; i++){
//     console.log(i);
// }



// exo

// logger les chiffres de 1 à 100 et préciser si il s'agit d"un nombre paire ou impaire

// for(let i =1; i<101; i++){
//     if(i%2===0){
//         console.log(i +" est pair");
//     }else{
//         console.log(i +" est impair");
//     }
// }

// exo 2
// logger les nombres de 1 à 100 , est préciser si ils sont multiples de 4, 
//si ils sont multiples de 7 et si ils sont multiples des deux (4,7)

// for(let i = 1; i <= 100; i++){
//     let msg = i + " is not a multiple de 4, de 7 ni de 4 ET 7 comme il a demandé le monsieur"

//     if (i % 4 === 0){
//          msg = i + " est multiple de 4"
        
//         if (i % 7 === 0){
//             msg += " Niko reçoit un multiple de 7 vies"
//         }
//     } else if (i % 7 === 0){
//         msg = i + " is a multiple de 7"
//     }

//     console.log(msg)
// }

//exo 
//générer une chaine de caractère qui contient les les nombres de 1 à 500 gràce à une boucle
// "1234567891011121314"
let maChaineDeCaractere = "";
for (let i = 1; i <= 500; i++){
    maChaineDeCaractere += i;
}
console.log(maChaineDeCaractere);