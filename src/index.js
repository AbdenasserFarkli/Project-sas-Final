
import promptSync from "prompt-sync";

const prompt = promptSync();
import {
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
} from "./progression.js";
function meneu() {
    console.log("--------------------------------------------------------------------");
console.log("SAS PROGRESS CONSOLE :");
console.log("");
console.log("");
console.log("1. Afficher le tableau de bord :");
console.log("2. Afficher la liste des apprenants");
console.log("3. Ajouter un apprenant");
console.log("4. Consulter un apprenant par identifiant");
console.log("5. Ajouter ou modifier le résultat d'une journée");
console.log("6. Rechercher un apprenant par nom");
console.log("7. Filtrer les apprenants par niveau");
console.log("8. Trier les apprenants par progression décroissante");
console.log("9. Trier les apprenants par ordre alphabétique");
console.log("0. Quitter");
   console.log("--------------------------------------------------------------------");
let Choice =Number(prompt("votre choix "))
switch (Choice) {
    case 1:
        tableBord()
        meneu()
        
        break;
        case 2:
         console.table(Afficherapprenants());
         
        meneu()
        break;
        case 3:
         ajouterApprenant()
         console.log(`
╔════════════════════════════════════════════╗
║                                            ║
║       🎉  AJOUT RÉUSSI AVEC SUCCÈS !       ║
║                                            ║
║       L'opération a été effectuée.         ║
║                                            ║
╚════════════════════════════════════════════╝
`);

        meneu()
        break;
          case 4:
            let arr = serchebyId()
            
            if (arr.length===0) {
                     console.log("\x1b[31mID invalide.\x1b[0m")

                
            }else
             console.table(arr);

         
        meneu()
        break;
        case 5:
            let EnregistrerResultat=enregistrerResultat()
            if (EnregistrerResultat==false) {
          console.log("\x1b[31mId invalide.\x1b[0m")

                
            }else          
console.log("\x1b[32mDéfi relevé avec succès ! Bravo ! 🎉\x1b[0m")
         
        meneu()
        break;
        case 6:
            let names = FindByName()

          if (names.length==0) {
            console.log("\x1b[31mNom invalide.\x1b[0m")
             
            
          }else

          console.table(names);
        
        meneu()
        break;
        case 7:
          console.table(filtrerParNiveau());
        meneu()
        break;
        case 8:
          console.table(trierParProgression());
        meneu()
        break;
        case 9:
          console.table(trierParalphabétique());
        meneu()
        break ;
        case 0:
    console.clear();
    console.log("Au revoir !");
    return;
          

    
}
    
}



 meneu()










