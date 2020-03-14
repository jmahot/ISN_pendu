function montrerCacher(){
    var texte = document.getElementById('credit_auteur');
    if(texte.style.display == "none") {
        texte.style.display = "table-cell";
    }
    else {
        texte.style.display = "none";
    }
}