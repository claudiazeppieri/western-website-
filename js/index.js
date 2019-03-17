function pickpostal() {
    var postal= document.getElementById(pickpostal);
    if(canada.isChecked) {
        postal.visibility= "visible"
    } else {
        zip.visibility= "blocked"
    }

}