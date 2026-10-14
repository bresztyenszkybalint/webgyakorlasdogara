function udvozlet(){
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
};

/*window.addEventListener("load", function() { //betolti a fuggvenyt
    udvozlet();
});*/

szinvalaszt.addEventListener("change", function() {
    const most = new Date();
    const datum =most.toLocaleDateString();
    const ido = most.toLocaleTimeString();
    const valasztas = this.value;
    if (valasztas === "zold") {
        cimkontener.className = "container-fluid bg-success text-center text-white p-2";
        console.log(`A szin megvaltozott Ekkor: ${datum} - ${ido}`);
    }
    else if (valasztas === "sarga") {
        cimkontener.className = "container-fluid bg-warning text-center text-white p-2";
        console.log(`A szin megvaltozott Ekkor: ${datum} - ${ido}`);
    }
    else if (valasztas === "piros") {
        cimkontener.className = "container-fluid bg-danger text-center text-white p-2";
        console.log(`A szin megvaltozott Ekkor: ${datum} - ${ido}`);
    }
    else {
        cimkontener.className = "container-fluid bg-secondary text-center text-white p-2";
        console.log(`A szin megvaltozott Ekkor: ${datum} - ${ido}`);
    }

});


document .addEventListener("DOMContentLoaded", function(){
    const most = new Date();
    const datum =most.toLocaleDateString();
    const ido = most.toLocaleTimeString();
    udvozlet();
    console.log(`az oldal betoltott. Ekkor: ${datum} - ${ido}`);
})

gomb.addEventListener("click", function(event) {
    const elso = Number(szam1.value);
    const masodik = Number(szam2.value);

    eredmeny.textContent = elso + masodik;
    event.preventDefault();

});