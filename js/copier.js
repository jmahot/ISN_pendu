function copier() {
    var copyText = document.getElementById("motpendu_accent");
    copyText.select();
    document.execCommand("copy");
    copyText.blur();
}