function EingabevonZahl(){

let Hallo = prompt()

if (Hallo > 90){
console.log("Sehr Gut");
}

else if(Hallo > 79 && Hallo < 91){
    console.log("Gut");
}

else if(Hallo > 69 && Hallo < 81 ){
    console.log("befriedigend")
}

else if(Hallo > 59 && Hallo < 71){
    console.log("ausreichend")
}

else {
    console.log("nicht bestanden")
}
}

EingabevonZahl();