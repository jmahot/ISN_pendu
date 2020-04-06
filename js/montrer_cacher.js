function montrerCacher_credit(){
    var texte = document.getElementById('credit_auteur');
    if(texte.style.display == "none") {
        texte.style.display = "table-cell";
    }
    else {
        texte.style.display = "none";
    }
}

function montrerCacher_copier(){
    var divMotCopier = document.getElementById('copier_motpendu');
    if(divMotCopier.style.display == "none") {
        divMotCopier.style.display = "flex";
    }
    else {
        divMotCopier.style.display = "none"
    }
}
