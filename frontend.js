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

cimkontener.append(cimsor, cimoszlop, focim, alcim);//alcsomopontok osszefuzese a cimkontenerbe
document.body.appendChild(cimkontener); //elso csomopont 
