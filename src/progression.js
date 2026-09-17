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
     let count =0
    let lengthArr= apprenants.length
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
function findById(id) {
      id = Number(prompt("Enter Id  : "))
    for (let i = 0; i < apprenants.length; i++) {
        if (apprenants[i].id==id) 
            return [true,i]
            
        
        
    }
                return [false,null]

}
function enregistrerResultat(id){
    let isvalid , indexid
     
    [isvalid,indexid]=findById()
    if (isvalid) {
       
        let day, exercices
    [day, exercices] = validerResultat();
    let challenge = prompt("Do you do challenge? true/false: ");
    challenge = challenge.toLowerCase() === "true";


    const result={
         jour: day, exercicesTermines: exercices,
          totalExercices: 20, challengeTermine: challenge

    }
    apprenants[indexid].resultats.push(result)
    


        
    }else
        console.log( " Id Is not valider");
        
return indexid
     

}

 

 
 