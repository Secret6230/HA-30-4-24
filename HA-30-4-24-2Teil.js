function EingabevonZahl(){

    let Hallo = prompt("Wie alt bist du ? :")
    
    if (Hallo > 67){
    console.log("Sie erhalten den Seniorenpreis");
    }
    
    else if(Hallo > 17 && Hallo < 67){
        console.log("Sie erhalten den Vollpreis");
    }
    
    else if(Hallo > 5 && Hallo < 18 ){
        console.log("Du erhälst den Kinderpreis")
    }    
    else {
        console.log("Du fährst Kostenlos")

    }
}
    EingabevonZahl();