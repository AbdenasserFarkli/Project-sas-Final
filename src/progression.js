import { apprenants } from './data.js'


import promptSync from "prompt-sync";

const prompt = promptSync();
function normaliserNom(nomComplet) {

    let isspace = false
    nomComplet = nomComplet.trim().replace(/[^a-zA-Z ]/g, "").toLowerCase().split("")
    for (let i = 0; i < nomComplet.length; i++) {
        if (i == 0 || isspace == true) {
            if (nomComplet[i] == " ") {
                nomComplet.splice(i, 1)
                i--
                isspace = false

            } else {
                nomComplet[i] = nomComplet[i].toUpperCase()
                isspace = false


            }

        }
        if (nomComplet[i] == " ") {
            isspace = true
        }

    }
    nomComplet = nomComplet.join("")
    return nomComplet

}
function validerResultat(jour, Exercices) {

    jour = Number(prompt("Enter Day you Want to add : "));
    while (jour < 1 || jour > 7) {
        console.log("Day Invalid Try again day between   1 and  7")
        jour = Number(prompt("Enter Day you Want to add : "));

    }
    Exercices = Number(prompt("Enter Number Exercices You Finshed : "));
    while (Exercices < 1 || Exercices > 20) {
        console.log("Exercices Invalid Try again Exercices  Includ  from 1 to 20");
        Exercices = Number(prompt("Enter Exercices you Want to add : "));

    }

    return [jour, Exercices];


}
function checkid(id) {
    id = Number(prompt(" Add Id  : "))

    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id === id) {
            console.log("this Id is Used");

            id = checkid(id)

        }

    }
    return id


}
function ajouterApprenant(IdUser, FullName, City) {
    IdUser = Number(checkid())
    FullName = normaliserNom(prompt(" Enter Your Name  : "))
    while (!isNaN(Number(FullName))) {
         FullName = normaliserNom(prompt(" Enter Your Name  : "))


        
    }
    City = normaliserNom(prompt(" Enter Name You City  : "))
    while (!isNaN(Number(City))) {
    City = normaliserNom(prompt(" Enter Name You City  : "))

        
    }
    const info = {
        id: IdUser,
        nomComplet: FullName,
        ville: City,
        resultats: []
    }


    apprenants.push(info)


}
function findIndexById(id) {
    id = Number(prompt("Enter Id  : "))
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id == id)
            return [true, i]



    }
    return [false, -1]

}
function misajourRusult(IndexId, result) {
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id == apprenants[IndexId].id) {
            for (let j = 0; j < apprenants[i].resultats.length; j++) {
                if (apprenants[i].resultats[j].jour == result.jour) {
                    return j
                }

            }

        }

    }
    return -1


}
function enregistrerResultat() {
    let isvalid, indexid

    [isvalid, indexid] = findIndexById()
    if (isvalid) {

        let day, exercices
        [day, exercices] = validerResultat();


        let challenge = prompt("Do you do challenge? true/false: ");
        challenge = challenge.toLowerCase() === "true";


        const result = {
            jour: day, exercicesTermines: exercices,
            totalExercices: 20, challengeTermine: challenge

        }
        let indexDAY = misajourRusult(indexid, result)
        if (indexDAY != -1) {
            apprenants[indexid].resultats[indexDAY] = result

        } else
            apprenants[indexid].resultats.push(result)




    } else


    return indexid


}

function FindByName(name) {
    name = prompt("Enter name You want to find : ").toLowerCase()

    let result = []
    let objRuslt ={}
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].nomComplet.toLowerCase().includes(name)) {
            objRuslt={
                "Id" : apprenants[i].id,
                "Nom Complet" : apprenants[i].nomComplet,
                "Ville": apprenants[i].ville
            }
            result.push(objRuslt) 



        }

    }
    return result
        
    

    

    

}
function serchebyId(id) {
    let arr =[]
    id = prompt("Enter Id ")
    id = Number(id)
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id == id) {
             arr.push({
                "Id" : apprenants[i].id,
                "Nom Complet" : apprenants[i].nomComplet,
                "ville" : apprenants[i].ville

             })

        }


    }
    return arr


}
function calculerProgression(indexid) {
    let totalexercices = 20
    let Exercicesterminés = 0
    let Exercicesproposés = 0
    let Progression = 0, CHallengesterminés = 0, JournéesRenseignées = 0
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id == indexid) {
            Exercicesproposés = totalexercices * apprenants[i].resultats.length
            for (let j = 0; j < apprenants[i].resultats.length; j++) {
                JournéesRenseignées = apprenants[i].resultats.length
                Exercicesterminés += apprenants[i].resultats[j].exercicesTermines
                if (apprenants[i].resultats[j].challengeTermine == true) {
                    CHallengesterminés++

                }
                Progression = (Exercicesterminés / Exercicesproposés) * 100


            }
            return [
                totalexercices,
                Exercicesterminés,
                Exercicesproposés,
                Progression,
                CHallengesterminés,
                JournéesRenseignées
            ];




        }


    }


}

function filtrerParNiveau(Choice) {

    console.log("1 Solide :");
    console.log("2 En progression :");
    console.log("3 À renforcer :");

    Choice = Number(prompt("  Enter Choice: "))
    let Solide = [],Enprogression=[], Àrenforcer=[]

    if (Choice == 1) {
        for (let i = 0; i < apprenants.length; i++) {
            let arr = calculerProgression(apprenants[i].id)
            if (arr[3] >= 80) {
                Solide.push({
                    id: apprenants[i].id,
                    nom: apprenants[i].nomComplet,
                    ville: apprenants[i].ville,
                    progress: arr[3]
                })

            }

        }
return Solide
    } else if (Choice == 2) {
        for (let i = 0; i < apprenants.length; i++) {
            let arr = calculerProgression(apprenants[i].id)
            if (arr[3] > 50 && arr[3] < 80) {
                 Enprogression.push({
                    id: apprenants[i].id,
                    nom: apprenants[i].nomComplet,
                    ville: apprenants[i].ville,
                    progress: arr[3]
                })



            }

        }
        return Enprogression

    } else
        for (let i = 0; i < apprenants.length; i++) {
            let arr = calculerProgression(apprenants[i].id)
            if (arr[3]<50) {
                 Àrenforcer.push({
                    id: apprenants[i].id,
                    nom: apprenants[i].nomComplet,
                    ville: apprenants[i].ville,
                    progress: arr[3]
                })
                
            }
           
                


            
            

        }
        return Àrenforcer



}
function tableBord() {
    let ApprenantsClass=[]
    let totalApprenant=apprenants.length
    let progressApprenant=0, TotalExercices =0
    let Apprenants =[]
   let Solide =0 ,  Enprogression=0,Arenforcer=0
        
        for (let i = 0; i < apprenants.length; i++) {
            let arr = calculerProgression(apprenants[i].id)
            progressApprenant+=arr[3]
            TotalExercices+=arr[4]
            
            if (arr[3]>=80) {
                Solide++
                
            }else if (arr[3]>=50  && arr[3]<80) {
                Enprogression++
                
            }else
                Arenforcer++
            
                Apprenants.push({
                    id: apprenants[i].id,
                    nom: apprenants[i].nomComplet,
                    ville: apprenants[i].ville,
                    "Exercice Terminés":arr[1],
                    "Exercices Proposés":arr[2],
                    "progress %": arr[3],
                    "Challenges terminés":arr[4],
                    "Journées renseignées":arr[5]

                })

            

        }
        ApprenantsClass.push({
            "total Apprenant" : totalApprenant,
            "Progress"  :  (progressApprenant/Apprenants.length),
            "solid": Solide,
            "Enprogression" :Enprogression,
            "A renforcer" : Arenforcer






        })
        console.table(ApprenantsClass);
        

        console.table(Apprenants);
         

    } 

function Afficherapprenants() {
    let Apprenants = [];

    for (let i = 0; i < apprenants.length; i++) {
            let Jour=0,exercices=0,total=0,challenge=0


        for (let j = 0; j < apprenants[i].resultats.length; j++) {
                
             Jour=apprenants[i].resultats[j].jour
                exercices+= apprenants[i].resultats[j].exercicesTermines
               total= apprenants[i].resultats.length * 20;
               if (apprenants[i].resultats[j].challengeTermine){
                challenge++
               }
            
        }
        Apprenants.push({
                "Id": apprenants[i].id,
                "Nom Complet": apprenants[i].nomComplet,
                "ville": apprenants[i].ville,
                "Jour": Jour,
                "Exercices Termines": exercices,
                "total Exercices": total,
                "challenge Termine":challenge
            });

    }

      return Apprenants;
}
function trierParProgression() {
    let sorting = [];

    for (let i = 0; i < apprenants.length; i++) {
        let arr = calculerProgression(apprenants[i].id);

        sorting.push({
            id: apprenants[i].id,
            nom: apprenants[i].nomComplet,
            ville: apprenants[i].ville,
            progress: arr[3]
        });
    }

    sorting.sort((a, b) => b.progress - a.progress);

    return sorting;
}
function trierParalphabétique() {
    let sorting = [];

    for (let i = 0; i < apprenants.length; i++) {
        let arr = calculerProgression(apprenants[i].id);

        sorting.push({
            id: apprenants[i].id,
            nom: apprenants[i].nomComplet,
            ville: apprenants[i].ville,
            progress: arr[3]
        });
    }

sorting.sort((a, b) => a.nom.localeCompare(b.nom));
    return sorting;
}



export {
    normaliserNom,
    validerResultat,
    checkid,
    ajouterApprenant,
    findIndexById,
    misajourRusult,
    enregistrerResultat,
    FindByName,
    serchebyId,
    calculerProgression,
    filtrerParNiveau,
    tableBord,
    Afficherapprenants,
    trierParProgression,
    trierParalphabétique

};
