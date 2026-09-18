import {apprenants} from './data.js'


import promptSync from "prompt-sync";

const prompt = promptSync();
function normaliserNom(nomComplet) {
    
    let isspace= false
    nomComplet = nomComplet.trim().replace(/[^a-zA-Z ]/g, "").toLowerCase().split("")
    for (let i = 0; i < nomComplet.length; i++) {
        if (i==0 || isspace == true) {
            if (nomComplet[i]==" ") {
                nomComplet.splice(i,1)
                i--
                isspace = false
                
            }else{
               nomComplet[i]= nomComplet[i].toUpperCase()
               isspace = false


            }
            
        }
        if (nomComplet[i]==" ") {
            isspace=true
        }
        
    }
    nomComplet= nomComplet.join("")
    return nomComplet
    
}
 function validerResultat(jour, Exercices){
 
 jour=  Number(prompt("Enter Day you Want to add : "));
 while (jour<1 || jour>7) {
    console.log("Day Invalid Try again day Includ  from 1 to 7")
    jour=  Number(prompt("Enter Day you Want to add : "));

 }
  Exercices =Number(prompt("Enter Number Exercices You Finshed : "));
while (Exercices<1 || Exercices>20) {
    console.log("Exercices Invalid Try again Exercices  Includ  from 1 to 20");
    Exercices=  Number(prompt("Enter Exercices you Want to add : "));

 }
 
 return [jour, Exercices];
 

 }
 function checkid(id) {
     id =Number(prompt(" Add Id  : "))
     
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id===id) {
            console.log("this Id is Used");
            
             id =checkid(id)
            
        }
        
    }
    return id 

    
 }
 function ajouterApprenant(IdUser,FullName,City) {
     IdUser =Number(checkid())
     FullName= normaliserNom(  prompt(" Enter Your Name  : ")) 
     City =  normaliserNom(  prompt(" Enter Name You City  : "))
   const info =  {
 id :IdUser,
 nomComplet  : FullName ,
 ville  : City,
 resultats: []
 }

    
    apprenants.push(info) 

    
 }
function findIndexById(id) {
      id = Number(prompt("Enter Id  : "))
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id==id) 
            return [true,i]
            
        
        
    }
                return [false,null]

}
function misajourRusult(IndexId, result) {
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id==apprenants[IndexId].id) {
            for (let j = 0; j < apprenants[i].resultats.length; j++) {
                if (apprenants[i].resultats[j].jour==result.jour) {
                    return j
                }
                
            }
            
        }
        
    }
        return -1

    
}
function enregistrerResultat(){
    let isvalid , indexid
     
    [isvalid,indexid]=findIndexById()
    if (isvalid) {
       
        let day, exercices
    [day, exercices] = validerResultat();
    
    
    let challenge = prompt("Do you do challenge? true/false: ");
    challenge = challenge.toLowerCase() === "true";


    const result={
         jour: day, exercicesTermines: exercices,
          totalExercices: 20, challengeTermine: challenge

    }
    let indexdy = misajourRusult(indexid,result)
    if (indexdy!=-1) {
        apprenants[indexid].resultats[indexdy]=result
        
    }else
            apprenants[indexid].resultats.push(result)



        
    }else
        console.log( " Id Is not valider");
        
return indexid
     

}

function FindByName(name) {
    name = prompt("Enter name You want to find : ")

    name=normaliserNom(name)
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].nomComplet.includes(name)) {
            return apprenants[i]
            

            
        }
        
    }
    
}
 function serchebyId(id) {
    id = prompt("Enter Id ")
    id= Number(id)
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id==id) {
            return apprenants[i]
            
        }
        
    }
    
 }
function calculerProgression(indexid) {
    let totalexercices =20
    let Exercicesterminés=0
   let Exercicesproposés=0
   let  Progression=0,CHallengesterminés=0,JournéesRenseignées=0
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id==indexid) {
            Exercicesproposés=totalexercices*apprenants[i].resultats.length
            for (let j = 0; j < apprenants[i].resultats.length; j++) {
                JournéesRenseignées=apprenants[i].resultats.length
                Exercicesterminés+=apprenants[i].resultats[j].exercicesTermines
                if (apprenants[i].resultats[j].challengeTermine==true) {
                    CHallengesterminés++
                    
                }
                    Progression=(Exercicesterminés/Exercicesproposés)*100

                
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
    
return [totalexercices,Exercicesterminés,Exercicesproposés,Exercicesproposés]
    
} 


console.log(calculerProgression(1));
