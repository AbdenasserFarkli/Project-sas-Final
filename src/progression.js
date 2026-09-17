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



