var motSecret;

var tableauCachette=new Array();	// Le tableau qui contient les lettres du mot à trouver

var tailleMot;				// Le nombre de lettres du mot à trouver
var coupsManques=0;			// Le nombre de lettres fausses essayées
var lettresDecouvertes=0;		// Le nombre de lettres trouvées
var end=false;				// true si le jeu est terminé

// On pioche un mot au hasard
motSecret=mots[Math.floor(Math.random()*mots.length)];

tailleMot=motSecret.length;

// Permet de changer la couleur des touches du clavier
function changeCouleur(element,couleur){
    element.style.color=couleur;
}

// Permet de récupérer le mot du tableau avec accent
function accent(){
    for(var i=0; i<mots.length; i++){
        if (motSecret==mots[i]){
            return tableauMots[i];
        }
    }
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
        document.images['compteur'].src="../images/count/count_"+coupsManques+".png"; // On change l'image du compteur à rebours
        
        // Si on a raté 10 fois :
        if(coupsManques>9){
            for(var i=0; i<tailleMot; i++) tableauCachette[i].style.visibility='visible';
            document.images['compteur'].style.width="250px";
            document.images['compteur'].style.height="250px";
            document.images['compteur'].src="../images/count/count_12.png";
            var motdecouvrir_msg = document.getElementById('message_defaite');
            motdecouvrir_msg.style.display="block";
            document.getElementById('icon_question').style.display = "block";
            document.getElementById('cachette').setAttribute('title', accent());
            // Donne un title à cachette à la fin : mot avec accent
            end=true;
            // on affiche le mot, on fini le jeu
            // Défaite
        }
    }
    if(lettresDecouvertes==tailleMot){
        document.images['compteur'].style.width="250px";
        document.images['compteur'].style.height="250px";
        document.images['compteur'].src="../images/count/count_11.png";
        document.getElementById('icon_question').style.display = "block";
        document.getElementById('cachette').setAttribute('title', accent());
        // Donne un title à cachette à la fin : mot avec accent
        end=true;
        // Victoire
    }
}