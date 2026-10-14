window.addEventListener("load", function() {
    const most = new Date();
    const nap = most.getDay();

    if (nap == 1) {
        alcim.textContent = "Üdvözlet kellemes hétfőt..."
    }
    else if (nap == 2) {
        alcim.textContent = "Üdvözlet kellemes keddet..."
    }
    else if (nap == 3) {
        alcim.textContent = "Üdvözlet kellemes szerdát..."
    }
    else if (nap == 4) {
        alcim.textContent = "Üdvözlet kellemes sütőtököt..."
    }
    else if (nap == 5) {
        alcim.textContent = "Üdvözlet kellemes penteket..."
    }
    else {
        alcim.textContent = "Üdvözlet kellemes hétvégét..."
        
    }
    

});  //betolti a fuggvenyt