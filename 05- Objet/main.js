// let user = ["vincent", 23, "expert comptable"];
// let user2 = [23,"vincent", "expert comptable"];

// const personnage1 = {}

// personnage1.firstName = "Vince"
// personnage1.lastName = "Lechat"
// personnage1.age = 32
// personnage1.job = "avocat"

// console.log(personnage1);
// console.log(personnage1.firstName);
// console.log(personnage1["firstName"]); // version OBLIGATOIRE pour les boucles 

// const personnage2 ={
//     "firstName" :" Quentin",
//     "lastName ": "Leroy",
//     "age ": 54,
//     "job" :"professeur"
// }

// //for IN

// for(let mdr in personnage2){
//     console.log(mdr + " " + personnage2[mdr]);
// }

// //for OF

// myArray = ["Houssine","Sof","Kev","Nico"]

// for(let Dude of myArray){
//     console.log(Dude);
// }

//     // pour dispoter d'un id

// for(let [Dude,DudeId] of myArray.entries()){
//     console.log(DudeId, Dude);
// }



// const amis = []; 
// amis.push("Vince");
// amis[1]="Nicolas";
// amis[2]="Tibo";
// amis[3]="Soufiane";

// const ennemi = [];
// ennemi[1]= "Seb";
// ennemi[0]="Matteo";
// ennemi[2]="Quentin";

// const gens = [amis,ennemi];
// for(let humanGroup of gens){ //boucle sur les array's de gens
//     for(let dude of humanGroup){ // boucle dans les array's qui composent gens
//     console.log(dude)
// }}

// const trucs =["Table","Chaise","Buffet","Vitrine","Drogue"]
// const prix =[250, 70, 460, 700, 100000000]

// const choix = prompt("Veuillez faire un choix entre" +  trucs.join(", "))

// for(let [itemId,item] of trucs.entries()){
//     if(item === choix){
//         console.log("Le prix de " + choix + " est de " + prix[itemId]);
//     }

// }

// const personnage1 = {}

// personnage1.firstName = "Vince"
// personnage1.lastName = "Lechat"
// personnage1.age = 32
// personnage1.job = "avocat"

// const personnage2 ={
//     "firstName" :" Quentin",
//     "lastName ": "Leroy",
//     "age ": 54,
//     "job" :"professeur"
// }

// const gang = [personnage1,personnage2]
// for(let perso of gang){
//     for(let info in perso){
//         console.log(info + " : " + perso[info])
//     }
// }


const DIList = {
    "stagiaires":[
        {
            "firstname":"Kentin",
            "lastname":"Esgain",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"THibau",
            "lastname":"Vandenbussche",
            "age":24,
            "city":"Houthem"
        },
        {
            "firstname":"Houcin",
            "lastname":"Flament",
            "age":26,
            "city":"Cuesmes"
        },
        {
            "firstname":"Nkko",
            "lastname":"Verde",
            "age":26,
            "city":"Charleroi"
        },
        {
            "firstname":"20 100",
            "lastname":"Lagast",
            "age":36,
            "city":"Mons"
        },
        {
            "firstname":"Math hé ho",
            "lastname":"Wrincq",
            "age":53,
            "city":"Quaregnon"
        },
        {
            "firstname":"Shaib",
            "lastname":"Davin",
            "age":30,
            "city":"Braine L'Alleud"
        },
        {
            "firstname":"Souf",
            "lastname":"Danzin",
            "age":40,
            "city":"Saint-Symphorien"
        },
        {
            "firstname":"Rachida",
            "lastname":"Delaunoy",
            "age":20,
            "city":"Charleroi"
        }
    ],
    "formateurs":[
        {
            "firstname":"Max",
            "lastname":"Chartreuse",
            "age":28,
            "city":"Mons"
        },
        {
            "firstname":"Sebastien",
            "lastname":"Cardon", 
            "age":34,
            "city":"Ghlin"
        },
        {
            "firstname":"Gilles",
            "lastname":"Bertrand",
            "age":35,
            "city":"Hyon"
        }
    ]
};


//exo 1
//écrire nom + prénom des stagiaires 

// for(let [stagiaireId, stagiaire] of DIList.stagiaires.entries()){
//     const titre = "Stagiaire " + (stagiaireId + 1)
//     const fullName = stagiaire.firstname + " " + stagiaire.lastname

//     console.log(titre + ": " + fullName)
// }


// for (const stagiaires of DIList.stagiaires){
//     console.log(stagiaires.firstname+" "+ stagiaires.lastname)
// }

// écrire le noms des stagiaires dont les prénoms commencent par [T,H,S]
for (const stag of DIList.stagiaires){
        let initiales = stag.firstname.substring(0,1)
        if(
            initiales ==="T"||initiales==="H"||initiales==="S")
        
        console.log(stag.lastname +" "+ stag.firstname)
    }
