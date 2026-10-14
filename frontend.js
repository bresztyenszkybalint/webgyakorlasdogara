const cimkontener = document.createElement("div"); //alcsomopont
cimkontener.className = "container-fluid bg-secondary text-center text-white p-2";
    

const cimsor = document.createElement("div");
cimsor.className = "row";

const cimoszlop = document.createElement("div");
cimoszlop.className = "col-12";

const focim = document.createElement("h1");
focim.className = "display-1";
focim.textContent = "Lorem ipsum";

const alcim = document.createElement("h6");
alcim.id = "udvozloszoveg";
alcim.className = "display-6";
alcim.textContent = "Ide kerül majd az üdvözlőszöveg.......";

const szinvalaszt = document.createElement("select");
szinvalaszt.id = "szinvalaszt";

const valassz = document.createElement("option");
valassz.textContent = "- válassz! -";

const szinvalaszt_zold = document.createElement("option");
szinvalaszt_zold.value = "zold";
szinvalaszt_zold.textContent = "zold"

const szinvalaszt_sarga = document.createElement("option");
szinvalaszt_sarga.value = "sarga";
szinvalaszt_sarga.textContent = "sarga"

const szinvalaszt_piros = document.createElement("option");
szinvalaszt_piros.value = "piros";
szinvalaszt_piros.textContent = "piros"

szinvalaszt.append(valassz, szinvalaszt_zold, szinvalaszt_sarga, szinvalaszt_piros)

cimkontener.append(cimsor, cimoszlop, focim, alcim, szinvalaszt);//alcsomopontok osszefuzese a cimkontenerbe
document.body.appendChild(cimkontener); //elso csomopont 

const tartkontener = document.createElement("div");
tartkontener.className = "container text-center mt-2";

const tartsor = document.createElement("div");
tartsor.className = "row";

const tartoszlop = document.createElement("div");
tartoszlop.className = "col-12";

const tartfejcim = document.createElement("div");
//tartfejcim.className = "display-3";
tartfejcim.textContent = "ez egy alcim";

const szam1 = document.createElement("input");
szam1.id = "szam1";
szam1.type = "number";
szam1.placeholder = "irjon be egy számot!";


const szam2 = document.createElement("input");
szam2.id = "szam2";
szam2.type = "number";
szam2.placeholder = "irjon be egy másik számot!";

const gomb  =document.createElement("button");
gomb.textContent = "művelet"

const eredmeny = document.createElement("p");
eredmeny.id = "eredmeny"


tartkontener.append(tartsor, tartoszlop, tartfejcim, szam1, szam2, gomb, eredmeny);
document.body.appendChild(tartkontener);