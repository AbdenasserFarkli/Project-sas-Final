let nom = "abDnsser       farKli...@    "


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
 const prompt = require("prompt-sync")();
 
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
 
return true 

 }
 let day =0
 let Exercices = 0
console.log(validerResultat(day , Exercices));

