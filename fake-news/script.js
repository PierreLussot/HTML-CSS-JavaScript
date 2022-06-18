console.log("hello");
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//on cherche les id
userName = document.getElementById("name");
userMail = document.getElementById("mail");
userMsg = document.getElementById("msg");

//on selectionne les regexs

regAlphaNum = /^[a-zA-Z_-]+$/;
regMail = /^.+@.+\..+$/;

/**NAME */

//Crée un événement qui change() qui appelle avec une fonction orpheline  une fonction
//qui detexte les regexs
userName.addEventListener("change", () => {
  detectionName();
});
//Crée un événement qui change qui appelle avec une fonction orpheline  une fonction
//qui detexte les regexs
userName.addEventListener("click", () => {
  removeNameIdName();
});

//on crée une fonction qui détecte si la regexs et bien respecté
function detectionName() {
  //test de la regex dans l'attribut .test()
  testName = regAlphaNum.test(userName.value);

  if (!testName) {
    // Crée un paragraphe
    let p = document.createElement("p");
    //lui donne un id NameErrorName
    p.id = "NameErrorName";
    //  Écrit ce que le paragraphe affichera
    p.textContent =
      "les lettres anonymes, c'est mal ";
    // le rattache à un parent sur le HTML
    document.getElementById("test1").appendChild(p);
  } else {
    flag === true;
  }
}

// Crée la fonction pour supprimer le paragraphe d'erreur en cas d'erreur
function removeNameIdName() {
  //Récupère l'id qui apparaît en cas d'erreur
  let removePerorName = document.getElementById("NameErrorName");
  //cree une condition si le id apparait
  if (removePerorName) {
    //il le supprime avec remove()
    removePerorName.remove();
  }
}



/**MAIL */

userMail.addEventListener("change", () => {
  detectionMail();
});

userMail.addEventListener("click", () => {
  removeMail();
});

function detectionMail() {
  testUserMail = regMail.test(userMail.value);

  if (!testUserMail) {
    let p = document.createElement("p");
    p.id = "mailErrorMail";

    p.textContent = "Et comment on fait pour vous spammer ?";
    document.getElementById("test2").appendChild(p);
  }
}

function removeMail() {
  let removeMailerorName = document.getElementById("mailErrorMail");

  if (removeMailerorName) {
    removeMailerorName.remove();
  }
}
/**TEXTE */

userMsg.addEventListener("change", () => {
  detectionTexte();
});

userMsg.addEventListener("click", () => {
  removeTexte();
});

function detectionTexte() {
  testUserTexte = userMsg.value;

  if (testUserTexte == "") {
    let p = document.createElement("p");
    p.id = "mailErrorTexte";

    p.textContent = "Nom mais allo quoi, tu nous ecris et tu nous écris rien ? ";
    document.getElementById("test3").appendChild(p);
  }
}

function removeTexte() {
  let removeTexteError = document.getElementById("mailErrorTexte");

  if (removeTexteError) {
    removeTexteError.remove();
  }
}

/* let flag = false;



if (flag === true) {
  let containerModale = document.createElement("div");
  containerModale.classList.add("containerModale");
containerModale.appendChild(body)

let Modale = document.createElement("div");
  Modale.classList.add("Modale");
Modale.appendChild(containerModale)

let p = document.createElement("p");
p.classList.add("paraModal");
Modal.appendChild(p)

let buttonModal = document.createElement("button");
buttonModal.classList.add("paraModalModal");
Modale.appendChild(buttonModal)

}
 */



let modal = document.getElementById('myModal');


let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}