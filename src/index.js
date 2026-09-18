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
    Afficherapprenants
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
let Choice =Number(prompt("Enter Exercices you Want to add : "))
switch (Choice) {
    case 1:
        tableBord()
        meneu()
        
        break;
        case 2:
         console.table(Afficherapprenants());
         
        meneu()
        case 3:
         ajouterApprenant()
         console.log("L'ajout a été effectué avec succès.");
        meneu()
          case 4:
         console.log(serchebyId());
         
        meneu()
        break;
        case 5:
         let index=  enregistrerResultat()
         console.log(apprenants[index]);
        meneu()
        break;
        case 6:
          console.log(FindByName());
        
        meneu()
        break;
        case 7:
          console.log(filtrerParNiveau());
        meneu()
        break;

    default:
        break;
}
    
}



 meneu()










