var motSecret;
        
//var time=new Date();			// Date d'aujourd'hui
var tableauCachette=new Array();	// Le tableau qui contient les lettres du mot à trouver
//var mots=new Array();		// Le tableau qui contient tous les mots possibles

var tailleMot;				// Le nombre de lettres du mot à trouver
var coupsManques=0;			// Le nombre de lettres fausses essayées
var lettresDecouvertes=0;		// Le nombre de lettres trouvées
var end=false;				// true si le jeu est terminé

// On prend un mot au hasard en fonction de la seconde en cours

/*motSecret=mots[time.getSeconds() % mots.length];*/
motSecret=mots[Math.floor(Math.random()*mots.length)] 
//l'autre méthode hasard trop restreint, toujours la même 1ere lettre
tailleMot=motSecret.length;

// Permet de changer la couleur des touches du clavier
function changeCouleur(element,couleur){
    element.style.color=couleur;
}
        
// Gère tous les traitements à faire lorsqu'on appuie sur une touche
function gameplay(element){
            
    // Si la couleur de fond est orange, c'est qu'on a déjà essayé - on quitte la fonction
    if(element.style.color=="orange" || end){
        return;
    }    
    // On récupère la lettre du clavier et on met la touche en orange (pour signaler qu'elle est cliquée)
    var lettre=element.innerHTML;
    changeCouleur(element,"orange");
            
    // On met la variable trouve à false;
    var trouve=false;
    
    // On parcours chaque lettre du mot, on cherche si on trouve la lettre sélectionnée au clavier
    for(var i=0; i<tailleMot; i++) {
            
        // Si c'est le cas :
       if(tableauCachette[i].innerHTML==lettre) {
            tableauCachette[i].style.visibility='visible';	// On affiche la lettre
            trouve=true;
            lettresDecouvertes++;
        }
    }
    
    // Si la lettre n'est pas présente, trouve vaut toujours false :
    if(!trouve){
        coupsManques++;
        document.images['pendu'].src="../images/penduC/pendu_"+coupsManques+".png"; // On change l'image du pendu
        document.images['compteur'].src="../images/count/count_"+coupsManques+".png";

        // Si on a raté 10 fois :
        if(coupsManques>9){
            for(var i=0; i<tailleMot; i++) tableauCachette[i].style.visibility='visible';
            document.images['compteur'].src="../images/count/count_12.png";
            document.images['compteur'].style.width="250px";
            document.images['compteur'].style.height="250px";
            var motdecouvrir_msg = document.getElementById('message_defaite');
            motdecouvrir_msg.style.display="block";
            end=true;
            // on affiche le mot, on fini le jeu
            // Défaite
        }
    }
    if(lettresDecouvertes==tailleMot){
        document.images['compteur'].src="../images/count/count_11.png";
        document.images['compteur'].style.width="250px";
        document.images['compteur'].style.height="250px";
        end=true;
        // Victoire
    }
}
