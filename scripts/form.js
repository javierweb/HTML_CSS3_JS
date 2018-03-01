var form = document.getElementsByName("contacto")[0];

var nombreInput = document.getElementById("nombre");
var emailInput = document.getElementById("email");
var telefonoInput = document.getElementById("telefono");
//var conocidoInput = document.getElementById("conocido");
var comentarioInput = document.getElementById ("comentario");
var submitButton = document.getElementById("enviar");

var conocidoInput = {
  conocido1: document.getElementById("tipo_conocido1"),
  conocido2: document.getElementById("tipo_conocido2"),
  conocido3: document.getElementById("tipo_conocido3"),
  conocido4: document.getElementById("tipo_conocido4")
};

form.addEventListener("submit", function(event) {
  if (nombreInput.checkValidity() === false) {
    alert("Tienes que escribir tu nombre");
    nombreInput.focus();
    event.preventDefault();
    return false;
  }
  
  var regex = /[A-Za-z0-9\.\+]+@[A-Za-z0-9]+\.[A-Za-z0-9\.]+/;
  var resultEmailValidation = regex.test(emailInput.value);

  if (resultEmailValidation === false) {
    alert("Tienes que escribir un email valido");
    emailInput.focus();
    event.preventDefault();
    return false;
  }
  var regex = /^\d{9}$/;
  var resultTelefonoValidation = regex.test(telefonoInput.value);

  if (resultTelefonoValidation === false) {
    alert("Tienes que escribir un telefono correcto");
    telefonoInput.focus();
    event.preventDefault();
    return false;
  }

  if (conocidoInput.conocido1.checkValidity() === false) {
    alert("Tienes que seleccionar como me has conocido");
    event.preventDefault();
    return false;
  }
    
  if (comentarioInput.checkValidity() === false) {
    alert ("Tienes que poner tu comentario");
    comentarioInput.focus();
    event.preventDefault();
    return false;
  }
  
 /*function countWords (phrase) {
		var phraseReplaceSpaces = phrase.replace(/\s\s+/g, ' ').trim();
		var arrayOfWords = phraseReplaceSpaces.split(' ');
		var numberOfWords = arrayOfWords.length;
		return numberOfWords;
 }*/

  submitButton.setAttribute("disabled", "");
  event.preventDefault();

  setTimeout(function() {
    form.reset();
    sendNotification("Formulario enviado", "Gracias!");
    submitButton.removeAttribute("disabled");
  }, 1000); 
});

