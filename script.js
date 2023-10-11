let ezrecenice = [
  'Sunce se spusta iza planina.',
  'Ptice slobodno lete nebom plavim.',
  'Djeca se igraju na plazi.',
  'Miris cveca siri se zrakom.',
  'Zalazak sunca boji nebo crvenim.',
  'Talasi zapljuskuju obalu snazno.',
  'Vetar nezno mrsi moju kosu.',
  'Macka se penje po drvetu.',
  'Mirna je noc, zvezde sjaje.',
  'Svetla grada obasjavaju nocnu tisinu.',
]

let medrecenice = [
  'Sunce se spusta iza brda u daljini.',
  'Ptice slobodno lete visoko nebom, bezbrizno i lako.',
  'Deca se veselo igraju na plazi, smiju se i trce.',
  'Miris cveca se siri zrakom i donosi radost.',
  'Zalazak sunca oboji nebo prekrasnim tonovima narandzaste.',
  'Talasi snazno udaraju obalu, stvarajuci miris morske soli.',
  'Vetar nezno mrsi moju kosu dok setam parkom.',
  'Macka se okrece i penje uz deblo drveca spretno.',
  'Mirna noc, tisuce zvezda sijaju na tamnom nebu.',
  'Svetla grada obasjavaju noc i stvaraju zivahnu atmosferu',
]

let hardrecenice = [
  'Danas je suncano i toplo, idealno vreme za setnju po obali reke.',
  'Veceras idem u bioskop da pogledam novi film koji svi hvale.',
  'U parku sam sreo starog prijatelja i dugo smo razgovarali o prošlosti.',
  'Volim da citam knjige jer me uvode u svet mašte i avanture.',
  'U gradu se odrzava velika izlozba umetnosti, planiram da je posetim sutra.',
  'Naredne nedelje putujem u planine kako bih uzivao u prirodi i pesacenju.',
  'Juce sam probao novo jelo u restoranu i odusevio sam se ukusom.',
  'Svakog jutra ustajem rano da bih trcao i odrzavao kondiciju.',
  'Treba da obavim nekoliko vaznih telefonskih poziva pre nego sto zavrsim dan.',
  'Planiram da naucim svirati gitaru, pa cu upisati casove kod profesionalnog instruktora.',
]

//pronalazi odredjene elemente na stranici uz pomoc selektora i zatim im dodaje funckionalnost
const ispist = document.querySelector("#ispis")
const easy = document.querySelector("#easy")
const medium = document.querySelector("#medium")
const hard = document.querySelector("#hard")
const divcuga = document.querySelector("#divcuga")
const container = document.querySelector(".container")
const unos = document.querySelector("#unos")
const tekst = document.querySelector("#par")
let prviNiz = []

//proverava postoji li u nizu "prviNiz" element koji ima određeni indeks "trazeniIndex" i neki određeni znak "trazeniChar", vraćajući true ako takav element postoji, inače vraća false.
function proveriUNizu(trazeniIndex, trazeniChar){
  let bool = false
  for (let index = 0; index < prviNiz.length; index++) {
    const uneseno = prviNiz[index];
    if (uneseno[0] != trazeniChar && uneseno[1] == trazeniIndex){
      bool = true
    }
  }
  return bool
}

//kada se unese tekst izvrsava se funkcija koja azurira prikaz na osnovu unesenog teksta, u zavisnost od unosa ispusuje slovo u odgovarajucoj boji 
unos.addEventListener('input', () =>{
    console.log("da")
    const nizrecenica = tekst.querySelectorAll('span')
    const nizunos = unos.value.split('')
    
    for (let index = 0; index < nizunos.length; index++) {
      let character = nizunos[index];
      prviNiz.push([character,index])
    }
    console.log(prviNiz)
    nizrecenica.forEach((spanslovo,index) =>{
        const slovo = nizunos[index]
        if(slovo==null){
          spanslovo.classList.remove("tacno")
          spanslovo.classList.remove("netacno")
          spanslovo.classList.remove("ispravljeno")
        }
        else if(slovo === spanslovo.innerText){
            if(!proveriUNizu(index, slovo)) {
              spanslovo.classList.add("tacno")
              spanslovo.classList.remove("netacno")
            }else{
              spanslovo.classList.add("ispravljeno")
              spanslovo.classList.remove("tacno")
              spanslovo.classList.remove("netacno")
            }
        }else{
            spanslovo.classList.add("netacno")
            spanslovo.classList.remove("tacno")
        }
    })
})

let m = 0
let i = 0
let timeLeft = 30;
let elem = document.getElementById('Timer');
let wpmvreme = 0;
let wpm = 0;
let recenica = null;

//proverava se ispis korisnika i racuna se wpm 
function ispis(){
  if(unos.value != recenica){
    document.getElementById("unos").disabled = true;
    wpmvreme = 30-timeLeft;
    const str = unos.value.split(' ')
    wpm = Math.round(str.length/(wpmvreme/60))
    ispist.innerHTML = "Cestitam, vasa brzina je: "+wpm+"wpm";
  }else{
    document.getElementById("unos").disabled = true;
    wpmvreme = 30-timeLeft;
    const str = unos.value.split(' ')
    wpm = Math.round(str.length/(wpmvreme/60))
    ispist.innerHTML = "Cestitam, vasa brzina je: "+wpm+"wpm";
  }
}

//pokrece se tajmer, ako dodje do 0 ili je recenica tacna onda se prekida 
function countdown(tajmer) {
  if (timeLeft == 0 || unos.value == recenica) 
    {
      clearTimeout(tajmer);
      ispis();
    }
    else{
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
      console.log(timeLeft)
    }
}

//proverava se da li je unos jednak recenici, ako je jednak prekida se tajmer i ide ispis 
function provera(tajmer){
  if(unos.value == recenica){
    clearTimeout(tajmer);
    document.getElementById("unos").disabled = true;
    ispis();
  }
}

//klikom na e,m,h varijabla i dobija vrednost 1, prikazuje se container dok se div sakriva, generise se nasumicna recenica iz e,m,h i svaki karakter recenice se prikazuje kao zaseban span
easy.onclick = () =>{
  i = 1
  divcuga.style.display = "none";
  container.style.display = "flex";

  const indeks = Math.floor(Math.random()*ezrecenice.length)
  recenica = ezrecenice[indeks]
  recenica.split("").forEach(character =>{
    const spanslovo = document.createElement('span')
    spanslovo.innerText = character
    tekst.appendChild(spanslovo)
  })
}

medium.onclick = () => {
  divcuga.style.display = "none";
  container.style.display = "flex";

  const indeks = Math.floor(Math.random()*ezrecenice.length)
  recenica = medrecenice[indeks]
  recenica.split("").forEach(character =>{
    const spanslovo = document.createElement('span')
    spanslovo.innerText = character
    tekst.appendChild(spanslovo)
  })
  console.log(recenica)
}

hard.onclick = () => {
  divcuga.style.display = "none";
  container.style.display = "flex";

  const indeks = Math.floor(Math.random()*hardrecenice.length)
  recenica = hardrecenice[indeks]
  recenica.split("").forEach(character =>{
    const spanslovo = document.createElement('span')
    spanslovo.innerText = character
    tekst.appendChild(spanslovo)
  })
}

unos.onclick = () =>{
  if(m==0){
    let timerCountdown = setInterval(countdown, 1000);
    let timerProvera = setInterval(provera, 1)

    countdown(timerCountdown);
    provera(timerProvera);
  }
  m++;
}